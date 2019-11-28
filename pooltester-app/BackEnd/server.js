const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//Connect to my server using my server link
const mongoDB = 'mongodb+srv://admin:admin@cluster0-qtiue.mongodb.net/Results?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Cors
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const Schema = mongoose.Schema;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const resultSchema = new Schema({
    chlorine: String,
    ph: String,
    name: String
})

const ResultsModel = mongoose.model('result', resultSchema);


app.get('/api/Results', (req, res) => {

    ResultsModel.find((error, data) => {
        res.json({ Results: data });
    })
})


app.get('/api/Results/:id', (req, res) => {
    console.log(req.params.id);

    ResultsModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

//Delete
app.delete('/api/Results/:id', (req, res) => {
    console.log(req.params.id);

    ResultsModel.deleteOne({ _id: req.params.id },
        (error, data) => {
            res.json(data);
        })
})

//Edit
app.put('/api/Results/:id', (req, res) => {
    console.log("Edit: " + req.params.id);
    console.log(req.body);

    ResultsModel.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true },
        (error, data) => {
            res.json(data);
        })
})

app.get('/api/Results/:id', (req, res) => {
    console.log("GET: " + req.params.id);

    ResultsModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

app.post('/api/Results', (req, res) => {
    //makes sure values have been posted correctly using terminal
    console.log('Post request Successful');
    console.log(req.body.Chlorine);
    console.log(req.body.Ph);
    console.log(req.body.Name);

    ResultsModel.create({
        chlorine: req.body.Chlorine,
        ph: req.body.Ph,
        name: req.body.Name
    });

    res.json('post recieved!');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))