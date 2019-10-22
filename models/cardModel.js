const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    question: '',
    answer: '',
    question_number: ''
});

mongoose.model('Card',cardSchema);

