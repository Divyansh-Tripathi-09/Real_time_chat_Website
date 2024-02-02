import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js"; 

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse  incoming request with JSON payloads(from request.body) a middle layer
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.get("/", (req,res)=>{
    //root route http://localhost:5000/
    res.send("Hello World??????bhaii");
});



server.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`server is running...!...on ${PORT}`)
});