require('dotenv').config(); 
const {Sequelize}= require('sequelize');

//To open connection with MySQL via Sequelize syntaxt
const sequelize= new Sequelize (process.env.MYSQL_DATABASE,process.env.MYSQL_USER,process.env.MYSQL_PASSWORD,{
    host:process.env.MYSQL_HOST,
    dialect:"mysql",
    logQueryParameters:true
})
const testConnection=async()=>{
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports= {sequelize, testConnection}