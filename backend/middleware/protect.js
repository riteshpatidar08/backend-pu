const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth && auth.startsWith('Bearer')) {
    try {
      const token = auth.split(' ')[1];

      console.log(jwt.verify(token, 'this-is-my-private-key'));
      next();
    } catch (error) {
      return res.status(401).json({
        message: 'Token is not valid',
      });
    }
  } else {
    res.status(401).json({
      message: 'NO token provided',
    });
  }
};

module.exports = protect;
