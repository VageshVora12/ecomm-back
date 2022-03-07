import express from 'express'
import{Login} from "../Controller/LoginController";
const loginRoute = express.Router();
loginRoute.post('/Login-info',Login);
export default loginRoute;