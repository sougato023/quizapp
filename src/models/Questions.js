const mongoose = require("mongoose");

const QuestionsSchema = new mongoose.Schema({
    description: String,
    alternatives:[
        {
            text:{
                type: String,
                required:true
            },
            isCorrect:{
                type: Boolean,
                required: true,
                default: false
            }
        }
    ]
});

module.exports = mongoose.model('Question', QuestionsSchema);