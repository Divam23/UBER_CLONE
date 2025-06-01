import { configDotenv } from "dotenv";
import connectDB from "./db/db.js";
import app from "./app.js";
configDotenv();

const PORT= process.env.PORT || 3200
  

connectDB().then(
    app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}`)
    })

).catch((err)=>{
    console.log("Mongo DB connection failed!!! ",err);
})