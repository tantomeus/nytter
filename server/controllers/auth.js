const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signup = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({...req.body, password: hash});

        await newUser.save();

        const { password, ...otherData} = newUser._doc;

        const token = jwt.sign({id: newUser._id}, process.env.JWT);
        res.cookie('access_token', token, {
            hhtpOnly: true
        }).status(200).json(otherData);
    } catch(err) {
        next(err);
    }
};

module.exports = { signup };