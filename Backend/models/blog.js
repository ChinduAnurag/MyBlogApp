const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogschema=new Schema({
    blogname:String,
    author:String,
    followers:Number,
    posts:[{
        title:String,
        date:String,
        body:String,
        likes:Number,
        comments:[]
    }]
});
const blogdata=mongoose.model('blog',blogschema);
module.exports=blogdata;