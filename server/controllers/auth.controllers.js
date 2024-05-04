import { fireabseapp } from "../firebase/fireabase_config.js";
import mongoose from "mongoose";
import UserProfile from "../models/user.models.js";
import generateQRCode from "../generateQr.js";
import dotenv from 'dotenv'

dotenv.config()

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,signInWithPopup } from "firebase/auth";

const auth = getAuth(fireabseapp);

export const register = async (req, res) => {
    const { email, password,
        name,
        phone,
    } = req.body;

    try {
     

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const url=process.env.FRONTEND_URL+'profile'+'/'+user.uid
        const data=await generateQRCode(url);
        console.log('data',data)
        const newUser = new UserProfile({
            uid: user.uid,
            name,
            phone,
            profile_photo: req.files['profilePhoto'][0].path,
            cover_photo: req.files['coverPhoto'][0].path,
            QrCOde:data
        });
        await newUser.save();

        res.status(201).json({
            user,
            newUser,
            data
        
        });
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const token = await user.getIdToken();
        res.status(200).json({
            user,
            token
        });
    } catch (error) {
        res.status(500).json(error);
    }
}


export const logout = async (req, res) => {
    try {
        await signOut(auth);
        res.status(200).json("Logout successful");
    } catch (error) {
        res.status(500).json(error);
    }
}


export const getLoggedInUser=async (req, res) => {
    try {
      const user = req.user;



      res.json({ user:user });
    } catch (error) {
      console.error('Error getting user:', error);
      res.status(500).json({ error: 'Error getting user' });
    }
}

export const getUserProfile=async(req,res)=>{
    const {uid}=req.user;
    console.log(req.user)
    try {
        const user=await UserProfile.findOne({uid:uid});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}


export const getQrCode=async(req,res)=>{
    const {uid}=req.user;
    try {
        const user=await UserProfile.findOne({uid:uid});
        console.log(user.QrCOde)
        res.status(200).json(user.QrCOde);
    } catch (error) {
        res.status(500).json(error);
    }
}


export const getProfileByUserID=async(req,res)=>{
    const {uid}=req.params;
    try {
        const user=await UserProfile.findOne({uid:uid});
        res.status(200).json(user);
    } catch  (error) {
        res.status(500).json(error);
    }
}







