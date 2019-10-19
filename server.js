const express = require('express')
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyparser = require('body-parser')
require('./src/models/cardModel')
const Card = mongoose.model('Card');

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB connected.')
    })
	.catch(err => {
		console.log(err);
    });    
    
app.use(bodyparser.json());

app.get('/api/cards/total',(req,res) =>{
    Card.find(function (error,cards){
        questionNumber = cards.length;
        res.send({questionNumber})  
  });
});

app.get('/api/cards',(req,res) =>{
    Card.find(function (error,cards){
        randomNumber = Math.floor(Math.random() * Math.floor(cards.length -1))
        const question = cards[randomNumber].question;
        const answer = cards[randomNumber].answer;
        res.send({question,answer});
    });
});


app.post('/api/cards',(req,res) => {
        const {question, answer} = req.body;
        
        const card = new Card({
           question,
           answer
        });
        card.save();
    
});

app.post('/api/cards/reset',(req,res) => {
    Card.remove(function (error,cards){
        
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));