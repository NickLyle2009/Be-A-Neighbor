const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      console.log(data);
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
<<<<<<< HEAD
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

=======
  signToken: function ({username, email, _id }) {
    const payload = { username, email, _id};
    console.log(payload);
>>>>>>> 9aa2c8d70327b51e24f3f40a42cd56d8290293b6
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
