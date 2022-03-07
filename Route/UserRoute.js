import express from 'express';
import {UserMain} from '../Controller/UserController';
const userRoute = express.Router();

userRoute.post("/user-main",UserMain);

export default userRoute;    

