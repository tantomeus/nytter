const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const connect = () => {
    mongoose.connect(process.env.MONGO).then(() => console.log('succsesfully connected to mongo')).catch((err) => console.error(err));
}

app.listen(3000, () => {
    connect();
    console.log('we are on 3000');
});