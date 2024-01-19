import express from "express";
import { login,getInfo,register } from "../Controller/userController.js";

const router=express.Router();

router.get('/info',getInfo);
router.post('/login',login);
router.post('/register',register);
export default router;