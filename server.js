const http = require('http');
const express = require('express');
const Container = require('./contenedor.js')
const app = express();
const server = app.listen(8080, () => console.log('Server Up'))

app.get('/',(req, res) =>{
    res.send('<h1>Desafío 3 sobre Servidores Express </h1>');
});

app.get('/products',(req, res) =>{
    res.send(getAllProducts());
});

app.get('/productRandom',(req, res) =>{
    res.send(getProductRandom());
});


function getAllProducts(){
    const container = new Container();
    const file = './products.txt';
    const allProductsArray = container.read(file);
    return allProductsArray;
}

function getProductRandom () {
    const container = new Container();
    const file = './products.txt';
    const allProductsArray = container.read(file);
    const randomIndex = Math.floor(Math.random() * allProductsArray.length);
    return allProductsArray[randomIndex];
}





