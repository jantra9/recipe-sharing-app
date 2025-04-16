const { sequelize } = require("../db/connection");
const DataTypes = require('sequelize');

const Post= sequelize.define("Post",{
    id:{
        type:DataTypes.CHAR,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false,
    }
})