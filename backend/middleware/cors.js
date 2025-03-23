import cors from "cors";
require("dotenv").config();

//CORS config options
const corsOptions={
    origin:process.env.FRONTEND_SERVER,
    methods:["GET","POST","DELETE","PUT"],
    allowedHeaders:["Content-type"],
    credentials:true
};

module.exports={corsOptions};