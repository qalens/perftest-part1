const express = require('express')
const app = express()
const PORT = 8020
const HOST = '0.0.0.0';
const leak = []
app.get('/add/:num1/:num2', function (req, res) {
    var num1 = parseInt(req.params.num1)
    var num2 = parseInt(req.params.num2)
    var sum = (num1 + num2).toString()
    leak.push(new Array(10000).join("*"));
    res.send(sum)
})

app.get('/subtract/:num1/:num2', function (req, res) {
    var num1 = parseInt(req.params.num1)
    var num2 = parseInt(req.params.num2)
    var difference = (num1 - num2).toString()
    res.send(difference)
})

app.get('/multiply/:num1/:num2', function (req, res) {
    var num1 = parseInt(req.params.num1)
    var num2 = parseInt(req.params.num2)
    var product = (num1 * num2).toString()
    res.send(product)
})

app.get('/divide/:num1/:num2', function (req, res) {
    var num1 = parseInt(req.params.num1)
    var num2 = parseInt(req.params.num2)
    var quotient = (num1 / num2).toString()
    res.send(quotient)
})
app.listen(PORT, HOST);
