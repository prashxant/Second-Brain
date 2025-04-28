import express from "express";
import { UserModel } from "./db";

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
    app.post("/api/v1/signin",(req,res) =>{


    })
    app.post("/api/v1/content",(req,res) =>{


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