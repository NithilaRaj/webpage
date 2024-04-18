const express = require('express');
const mongoose = require('mongoose');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017');
const userSchema = new mongoose.Schema({

    name: {type:String, required:true},
    age : {type:Number, required:true}
})

const userModel = mongoose.model("datas",userSchema)

app.post("/putData",async(req,res) => {

    const user = req.body;
    const newUser = new userModel(user)
    await newUser.save();
    res.json(user)

})
app.get("/getData",(req,res) =>{

    userModel.find({name:'uiuiu'}).then(function(datas){

        res.json(datas)
    })
})
app.listen(3001, () =>{

    console.log("Server is running")
})
