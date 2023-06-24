const express = require("express")

const jwt = require("jsonwebtoken");
const { Question } = require("../model/QueAns.model");

const DataRouter = express.Router()

DataRouter.get('/:query', async (req, res) => {
  const query = req.params.query.toLowerCase();
  try {
    let arr= await Question.find()
    // console.log(arr)
    let a=[]
   for(let i=0;i<arr.length;i++){
        a.push(arr[i].question.toLowerCase())
   }
  
   let p=a.includes(query.toLowerCase())
   let b=''
   for(let j=0;j<a.length;j++){
    if(a[j].toLowerCase().includes(query.toLowerCase())){
      b+=a[j]
      break;
    }
   }
  console.log(b)
  let c=arr.filter((question)=>{
    if(question.question.toLowerCase()===b){
      console.log(question.answer)
    return  res.status(200).send({message:question.answer})
    }
  })
  if(c.length==0){
    res.status(401).send({msh:"not found"})
  }

  } catch (err) {
    console.log(err)
    res.status(401).send({msg:err.message})
    // res.status(500).send({msg:err})
  }
  
});
module.exports = { DataRouter }