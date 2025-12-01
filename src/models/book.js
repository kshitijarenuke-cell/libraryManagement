const { type } = require("os");
const { title } = require("process");

const bookSchema = {

    title:{
        type:String,
        required:true
    },
 author:{
        type:String,
        required:true
    },
    publishedYear:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:["available"," not available"],
        default:"available"
    },
    createdAt:{type:Date,default:Date.now},
    }
  
    const Book=mongoose.model('book',bookSchema);
    module.exports={Book};