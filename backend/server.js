const express= require("express");
const app = express();
const {testConnection}= require("./db/connection");
const usersRoutes= require("./routes/usersRoutes");
const postsRoutes= require("./routes/postsRoutes")
const corsOptions =require("./middleware/cors")
const cors= require( "cors");

//Apply CORDS middleware
app.use(cors(corsOptions))

//Parse data to json
app.use(express.json());

//Initiate MySQL connection
testConnection();

//Routes
app.use("/",usersRoutes);
//app.use("/post",postsRoutes);

//Running server
app.listen(3000,()=> console.log("Server is running on port 3000"));