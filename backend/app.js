import express from "express";
import db from './config.js';
import router from './router.js';
import cors from "cors"
const app = express()

app.use(cors())
app.use('/', router);
app.use(express.json())
app.listen(8800, ()=> {
    console.log("Connected to Backend")
})
