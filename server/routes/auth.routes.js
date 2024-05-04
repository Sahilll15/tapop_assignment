import {register,login,logout,getLoggedInUser,getUserProfile,getQrCode,getProfileByUserID} from '../controllers/auth.controllers.js'
import authMiddleware from '../middlewares/verifyID.middleware.js'
import express from 'express'
import { upload } from '../middlewares/upload.middeware.js'

const router=express.Router()

router.post('/register',upload,register)
router.post('/login',login)
router.get('/logout',logout)
router.get('/user',authMiddleware,getLoggedInUser)
router.get('/profile',authMiddleware,getUserProfile)
router.get('/qrcode',authMiddleware,getQrCode)
router.get('/profile/:uid',getProfileByUserID)


export default router