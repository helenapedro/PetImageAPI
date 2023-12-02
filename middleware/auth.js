const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY ||'main_secret_key';

function authenticate(req, res, next) {
     const token = req.headers.authorization;

     if (!token) {
          return res.status(401).json({ error: 'Token not provided' });   
     }

     try {
          jwt.verify(token, SECRET_KEY);
          next();
     } catch (error) {
          return res.status(401).json({ error: 'Invalid token'});
     }
}

module.exports = authenticate;