import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import StockApi from './api/StockApi.js';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the API'
    });
})

app.get('/home', (req, res) => {
    res.status(200).json(StockApi);
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})