const express = require("express");
const QuestionsModel = require("./../models/Questions") 
const router = express.Router();

//get all questions
router.get("/questions", async (req,res) => {
    try{
        const questions = await QuestionsModel.find();
        return res.status(200).json(questions);

    }catch(error){
        return res.status(500).json({"error": error});
    }
    res.send("All questions")
});

//get one question
router.get("/questions/:id", async (req,res) => {
   try{
       const _id = req.params.id;
       const question = await QuestionsModel.findOne({_id});
       if(!question){
           return res.status(400).json({});
       }else{
        return res.status(200).json(question);
       }

   }catch(error){
        return res.status(500).json({"error": error});
    }
});

//create one question
router.post("/questions", async (req,res) => {
    try{
        const { description, alternatives} = req.body;
        const question = await QuestionsModel.create({
            description,
            alternatives
        })

        return res.status(201).json(question)
        // console.log("Description : " + description + "\n Alternatives : "+alternatives[0].text);
        //res.end("End Post");
    } catch(error){
        return res.status(500).json({"error": error});
    }
});

//update one question
router.put("/questions/:id", (req,res) => {

});

//delete one question
router.post("/questions/:id", (req,res) => {

});

//test
router.get("/hello", (req,res) => {
    res.send("Hello Quiz");
});

module.exports = router;