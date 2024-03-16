const mongoose = require('mongoose');
let compass_url = 'mongodb://localhost:27017/sampleDB'
let mongodb_url ="mongodb+srv://salvin:salvin@salvin.6dhirwy.mongodb.net/FistDB?retryWrites=true&w=majority&appName=salvin"

mongoose.connect(mongodb_url).then(()=>{
    console.log("db connected")
})
.catch(()=>{
    console.log(err);
});     