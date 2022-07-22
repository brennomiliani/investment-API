const HttpException = require('../shared/httpExeption');

const httpErrorMiddleware = (err, req, res, _next) => {
  const { status, message } = err;
  res.status(status || 500).json({ message });
};

module.exports = httpErrorMiddleware;
