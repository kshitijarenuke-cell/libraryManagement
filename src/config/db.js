const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kshitijarenuke:Kshitija123@cluster0.narpy89.mongodb.net/?appName=Cluster0');

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('DataBase connected successfully...');
});

db.on('error',()=>
{
    console.log('Database connection failed...');
});

module.exports=db;