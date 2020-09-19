const mongoose = require('mongoose')
const schema = mongoose.Schema

const amountschema = new schema({
    amount:{
        type:Number,
    },
    description:{
        type:String,
        minlength:3,
    }
},{
    timestamps:true
})

const userschema = new schema({
    name:{
        type:String,
        unique:true,
        minlength:3,
    },
    amounts:[amountschema]
})

const User = mongoose.model('User',userschema)
module.exports=User;
