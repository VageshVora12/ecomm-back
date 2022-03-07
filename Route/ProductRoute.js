import express from "express";
import {ProductMain,ProductList} from '../Controller/ProductController';
const productRoute = express.Router();
productRoute.post("/product-main",ProductMain);
productRoute.post("/product-list",ProductList);
export default productRoute;  