import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import StockDataApi from './api/StockDataApi.js';
const app = express();

app.use(cors());
// home stock data api
app.get('/home', (req, res) => {
    res.status(200).json(StockDataApi);
})

// search api data
app.get('/search', (req, res) => {
    let search = req.query.search;
    let result = StockDataApi.filter(stock => stock.category.toLowerCase() || stock.name.toLowerCase().includes(search.toLowerCase()));
    res.status(200).json(result);
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})