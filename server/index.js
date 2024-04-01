const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.js');
const authRouter = require('./routes/auth.js');

dotenv.config();

const connect = () => {
    mongoose.connect(process.env.MONGO).then(() => console.log('succsesfully connected to mongo')).catch((err) => console.error(err));
}
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.listen(3000, () => {
    connect();
    console.log('we are on 3000');
});