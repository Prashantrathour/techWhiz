const mongoose=require("mongoose")

const questionSchema = new mongoose.Schema({
    question: String,
    answer: String
    
  });

  const Question = mongoose.model('Question', questionSchema);

  module.exports={Question}