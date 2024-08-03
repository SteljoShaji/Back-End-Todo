const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    try {
      const jwtResponse = jwt.verify(token, "superSecretKey123");
      console.log(jwtResponse);
      req.payload = jwtResponse.userId
       // Optional: attach the decoded user information to the request object
      next(); // Continue to the next middleware or route handler
    } catch (err) {
      res.status(403).send({ error: 'Invalid or expired token' });
    }
  } else {
    res.status(401).send({ error: 'Authorization failed!!!Please Login...' });
  }
};

module.exports = jwtMiddleware;
