import express from "express"
import cors from "cors"
import userRouter from "./routes/user.routes.js";

const app = express();


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req, res)=>{
    res.send("It is working")
})

app.use("/users", userRouter);

export default app;