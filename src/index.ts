import express from "express";
import { ContentModel, UserModel } from "./db";
import jwt from "jsonwebtoken";
import {JWT_PASSWORD} from "./config"
import { userMiddleware } from "./middleware";

const app  = express();
app.use(express.json())

    app.post("/api/v1/signup", async (req, res) => {
        //zod validation,hasing the password //
        const username = req.body.username;
        const password = req.body.password;

       try{
        
       await UserModel.create({
            username: username,
            password: password
        })

        res.json({
            message: "you are signed in"
        })
       }catch(e){

        res.status(411).json({
            message:"user already exixt"
        })
       }
    })
    app.post("/api/v1/signin",userMiddleware,async (req,res) =>{

        const username = req.body.username;
        const password = req.body.password;
        const exixtingUser = await UserModel.findOne({
            username,
            password
        })

        if(exixtingUser){
            const token = jwt.sign({
                id: exixtingUser._id
            }, JWT_PASSWORD)

            res.json({
                token
            })
        }else{
            res.status(403).json({
                message: "incorrect Credentials"
            })
        }
    })


    app.post("/api/v1/content",(req,res) =>{

        const link =  req.body.link;
        const type  =  req.body.type;
        ContentModel.create({
            type,
            link,
            //@ts-ignore
            userId: req.userId
        })

    })

    app.get("/api/v1/content",(req,res) =>{


    })

    app.delete("/api/v1/content",(req,res) =>{


    })

    app.post("/api/v1/brain/share",(req,res) =>{


    })

    app.get("/api/v1/brain/:shareLink",(req,res) =>{


    })

    app.listen(3000);