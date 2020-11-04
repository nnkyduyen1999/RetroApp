const jwt = require('jsonwebtoken');

module.exports.verifyToken = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send("Access denied");
    }

    try {
        const verifier = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = verifier;
        next();
    } catch (err) {
        res.status.send('Invalid token');
    }
}