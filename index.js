import express from 'express';
import mongoose from "mongoose";
import router from "./router.js";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 3000;
const DB_URL = `mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@cluster0.1vl4i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`


const app = express();
app.use(express.json());
app.use('/api', router);
app.use(bodyParser.urlencoded({extended: true}));

async function startApp () {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => {
            console.log(`Server is up and running on ${PORT} port.`)
        })
    } catch (err) {
        console.log(err)
    }
}
startApp()