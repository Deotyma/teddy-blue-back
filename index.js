import express from "express"
import dotenv from "dotenv"
import MongoDBteddy from "./config/db.js";

const port = parseInt(process.env.PORT, 10) || 5000;
const app = express()
dotenv.config()

app.get('/', (req, res, next)=> {
    res.json({status: 200, msg: "ok"})
})


app.listen(port, ()=>{
    console.log(`it works on port ${port}`)
    MongoDBteddy()
});