const express = require('express')
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyparser = require('body-parser')
require('./models/cardModel')
const Card = mongoose.model('Card');

mongoose
    .connect(keys.mongoURI, { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB connected.')
    })
    .catch(err => {
        console.log(err);
    });

app.use(bodyparser.json());

app.get('/api/cards/total', (req, res) => {
    Card.find(function (error, cards) {
        questionNumber = cards.length;
        res.send({ questionNumber })
    });
})

app.get('/api/cards', (req, res) => {
    Card.find(function (error, cards) {
        randomNumber = Math.floor(Math.random() * Math.floor(cards.length))
        const question = cards[randomNumber].question;
        const answer = cards[randomNumber].answer;
        res.send({ question, answer });
    });
})



app.post('/api/cards', (req, res) => {
    const { question, answer } = req.body;

    const card = new Card({
        question,
        answer
    });
    card.save();

})


app.post('/api/cards/reset', (req, res) => {
    Card.remove(function (error, cards) {

    });
})

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));
    
    app.get('*',(req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });

}
const port = process.env.PORT || 8080;
app.listen(port);