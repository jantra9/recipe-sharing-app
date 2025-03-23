const express= require("express");
const app = express();
const asyncHandler= require("express-async-handler");
const {testConnection}= require("./db/connection")
const usersRoutes= require("./routes/usersRoutes")
app.use(express.json());

testConnection();


app.use("/",usersRoutes);


app.listen(3000,()=> console.log("Server is running on port 3000"));