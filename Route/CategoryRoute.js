import express from "express";
import {CategoryMain,CategoryList} from '../Controller/CategoryController';
const categoryRoute = express.Router();
categoryRoute.post("/category-main",CategoryMain);
categoryRoute.get("/category-list",CategoryList)
export default categoryRoute;  