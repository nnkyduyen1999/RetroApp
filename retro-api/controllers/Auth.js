const User = require('../models/Users');
const {registerValidation, loginValidation} = require('../validation');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.register = async (req, res, next) => {
    const {error} = registerValidation(req.body);
    if (error) 
        return res.status(400).send(error.details[0].message);
    
    const existedUser = await User.findOne({email: req.body.email});
    if (existedUser) {
        return res.status(400).send("Existed email");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        res.json({user: user._id});
    } catch(err) {
        res.json(err.message);
    }
}

module.exports.login = async (req, res, next) => {
    const {error} = loginValidation(req.body);
    if (error) 
        return res.status(400).send(error.details[0].message);
    const existedUser = await User.findOne({username: req.body.username});
    if (!existedUser) {
        return res.status(400).send("User not found");
    }

    const validPass = await bcrypt.compare(req.body.password, existedUser.password);
    if (!validPass) {
        return res.status(400).send("Invalid password");
    }

    const token = jwt.sign({_id: existedUser._id}, process.env.SECRET_TOKEN);
    res.header('auth-token', token).json({
        _id: existedUser._id,
        token: token
    });

}