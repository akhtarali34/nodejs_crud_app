import { query } from "express";
import User from "../Model/userModel.js";
import mongodb from "mongodb"

export const createUser = async (req , res)=>{
    try{
        const userData = new User(req.body);
         const {email} = userData;
         const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({message:"user already exist"});
        }

        const saveUser =await userData.save()
        res.status(200).json(saveUser);
     } catch(error){
        res.status(500).json({error:"inetrnal server error"})
     }
}



export const  fetchUser = async (req, res)=>{
 try{
    const users = await User.find({})
    if(users.length=== 0){
        res.status(404).json({message: "User not found"})
    }
    res.status(200).json(users)
 } catch(error){
    res.status(500).json({error:"inetrnal server error"})
 }
}



export const  update = async (req, res)=>{
    try{
       const id = req.params.id;
       const id1 =new mongodb.ObjectId(id);
       const userExist = await User.findOne({_id:id1});

       if(!userExist){
         console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
        return res.status(404).send({message:"user not exist"})
       }

       const updateUser = await User.findByIdAndUpdate(id1, req.body , {new:true});
       res.status(201).send(updateUser)
       
    } catch(error){
       res.status(500).json({error:"inetrnal server error"})
    }
   }



   export const  deleteBlog = async (req, res)=>{
      try{
         const id = req.params.id;
         const id1 =new mongodb.ObjectId(id);
         const userExist = await User.findOne({_id:id1});
  
         if(!userExist){
          return res.status(404).send({message:"user not exist"})
         }
  
         const updateUser = await User.findByIdAndDelete(id1, req.body , {new:true});
         res.status(201).send({message:"user deleted sucessfullly"})
         
      } catch(error){
         res.status(500).json({error:"inetrnal server error"})
      }
     }