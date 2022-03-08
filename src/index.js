import express from 'express';
import mongoose from 'mongoose';
import userRoute from './Route/UserRoute';
import categoryRoute from './Route/CategoryRoute';
import productRoute from './Route/ProductRoute';
import loginRoute from './Route/LoginRoute';
import sessionRoute from './Route/SessionRoute';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
const app = express();
app.use(express.json());
app.use(express.static(__dirname)); 
app.use(session({
    secret:'Your_Secret_Key',
    resave:true,
    saveUninitialized:true
}))
app.use(cors({credentials:true,origin:"http://localhost:3000"}));
app.use(cookieParser());
app.use('/user', userRoute);
app.use('/category',categoryRoute);
app.use('/product',productRoute);
app.use('/login',loginRoute);
app.use('/session',sessionRoute);
mongoose.connect('mongodb+srv://vagesh12:vageshVora@cluster0.prgxn.mongodb.net/mini?retryWrites=true&w=majority')
    .then(() => {
        console.log("mongodb started.");
    }).catch(() => {
        console.log("mongodb connection failed.")
    })
app.listen(9000, function () {
    console.log("SERVER STARTED");
}
)