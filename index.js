const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.models.js')
const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Message from server")
})

app.post('/api/products', async (req, res)=>{
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }catch (error){
        res.status(500).json({message: error.message});
    }
})


mongoose.connect("mongodb+srv://sushanniroula:sushan123@backenddb.fehll.mongodb.net/CRUD-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log("Database connected")
    app.listen(3000, ()=>{
        console.log("Server running on port 3000")
    })
})
.catch(()=>{
    console.log("Failed to connect")
})