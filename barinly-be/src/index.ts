import express, { json } from "express";
import { ContentModel, LinkModel, UserModel } from "./db";
import jwt from "jsonwebtoken";
import {JWT_PASSWORD} from "./config"
import { userMiddleware } from "./middleware";
import { random } from "./utils";

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

    app.post("/api/v1/signin",async (req,res) =>{

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

    app.post("/api/v1/content",userMiddleware, async (req,res) =>{

        const link =  req.body.link;
        const type  =  req.body.type;
        await ContentModel.create({
            link,
            type,
            //@ts-ignore
            userId: req.userId,
            tags: []
        })
           res.json({
             message:"content added"
           }) 
    })

    app.get("/api/v1/content",userMiddleware, async (req,res) =>{
        //@ts-ignore
        const userId  = req.userId;
        const content = await ContentModel.find({
            userId: userId
        }).populate("userId" , "username")
        res.json({
            content
        })
    })

    app.delete("/api/v1/content",userMiddleware, async (req,res) =>{
            const contentId = req.body.contentId;

            await ContentModel.deleteMany({
                contentId,
                //@ts-ignore
                userId: req.userId
            }) 
            res.json({
                 messege: "content deleted"
            })

    })

    app.post("/api/v1/brain/share",userMiddleware, async (req,res) =>{
            const share = req.body.share;
            if(share){
               await LinkModel.create({
                   //@ts-ignore 
                    userId: req.userId,
                    hash: random(10)
                })
            }else{
               await LinkModel.deleteOne({
                   //@ts-ignore 
                     userId: req.userId
                })
            }
                res.json({
                    message: "updated sharable link"
                })

    })

    app.get("/api/v1/brain/:shareLink",async (req,res) =>{
            const hash = req.params.shareLink;

            const link  = await LinkModel.findOne({
                hash
            })

            if(!link){
                res.status(411).json({
                    message: "sorrect incorect input "
                })
                return
            }
            const content = await ContentModel.find({
                userId: link.userId
            })

            const user = await UserModel.findOne({
                userId: link.userId
            })

            if(!user){
                res.status(411).json({
                    message: "user not found , error shoud not happen "
                })
                return;
            }

            res.json({
                username: user?.username,
                content: content

            })
    })

    app.listen(3000);