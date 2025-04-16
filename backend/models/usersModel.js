const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");
const { v4 : uuidv4 }= require("uuid");

const User = sequelize.define("User",{
    id:{
        type:DataTypes.UUID,
        defaultValue:uuidv4,
        primaryKey:true
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    createdAt:{
        type:DataTypes.DATE,
        field:"created_at"
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at" // ✅ Maps Sequelize's `updatedAt` to MySQL's `updated_at`
      }
  },   
    {
    timestamps:true,
    tableName:"users"
    }
)

module.exports = User;