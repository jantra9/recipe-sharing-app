const express= require("express");
const app = express();
const asyncHandler= require("express-async-handler");
const {testConnection}= require("./db/connection");
const usersRoutes= require("./routes/usersRoutes");
const corsOptions =require("./middleware/cors")

//Apply CORDS middleware
app.use(cors(corsOptions))

//Parse data to json
app.use(express.json());

//Initiate MySQL connection
testConnection();

//Routes
app.use("/",usersRoutes);

//Running server
app.listen(3000,()=> console.log("Server is running on port 3000"));