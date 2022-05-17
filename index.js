import express from "express"
import dotenv from "dotenv"
import MongoDBteddy from "./config/db.js";
import authRoute from "./routes/auth.js";
import itemsRoute from "./routes/items.js";
import usersRoute from "./routes/users.js";
import messagesRoute from "./routes/messages.js";

const port = parseInt(process.env.PORT, 10) || 5000;
const app = express()
dotenv.config()

app.get('/', (req, res, next)=> {
    res.json({status: 200, msg: "ok"})
})

//middlewares

app.use(express.json())

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/items", itemsRoute);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/messages", messagesRoute);


app.listen(port, ()=>{
    console.log(`it works on port ${port}`)
    MongoDBteddy()
});