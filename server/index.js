const express = require('express');
const app = express();

const makePrediction = require('./Predictor')
const cors = require('cors')


app.use(express.json());
app.use(cors())
var history = [];

app.post('/predict', (req,res)=>{
    var output = makePrediction(req.body)
   res.json(output)
})

app.get('/display', (req,res)=>{
    temp = history;
    history = [];
    res.json(temp)
})


app.listen(5500, () => {
    console.log('Server is listenning on PORT 5500')
})