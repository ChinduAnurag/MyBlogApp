const express = require('express')
const { findById } = require('../models/blog')
const router = express.Router() //routing function
const DATA = require('../models/blog') // DB of blg

//view full list of posts 
router.get('/bloglist',async(req,res)=>{
try{
const list=await DATA.find()
res.send(list)
console.log(list)

}catch(error){
    console.log(error);
}

})

//single post
router.get('/blog/:id',async(req,res)=>{
    try{

    }catch(error){

    }
})
// //post add blog
// router.post('/blog', async (req, res) => {
//     try {

//         console.log(req.body)
//         let item = {  //to fetch and save data from front end in server
//             name: req.body.name,
//             age: req.body.age
//         }


//         const newStudent = new DATA(item) //to check incoming data
//         const saveStudent = await newStudent.save() //mongoDB save

//         res.send(saveStudent)


//     } catch (error) {

//         console.log(error)
//     }
// })


module.exports=router;