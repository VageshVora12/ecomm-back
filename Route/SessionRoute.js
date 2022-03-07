import express from "express";
import { setSession, getSession , destroySession,logutfun} from "../Controller/SessionController";
const sessionRoute = express.Router();

sessionRoute.get('/get-session',getSession);
sessionRoute.get('/set-session/:name',setSession);
sessionRoute.get('/destroy-session',destroySession);
sessionRoute.get('/logout',logutfun);

export default sessionRoute;