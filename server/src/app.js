import express from "express"
import cors from "cors"
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import captainRouter from "./routes/captain.routes.js";

const app = express();


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.get("/",(req, res)=>{
    res.send("It is working")
})

app.use("/users", userRouter);
app.use("/captains", captainRouter)

export default app;