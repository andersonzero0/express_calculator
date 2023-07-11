const express = require('express')
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/calculadora.html')
})

app.post('/', (req, res) => {
    var result = Number(req.body.n1) + Number(req.body.n2)

    res.send("Result is " + result)
})

app.listen(PORT, () => {

    console.log(`Open server on ${PORT}!`);
    
})