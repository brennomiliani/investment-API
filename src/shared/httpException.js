class HttpException extends Error {
  status;

  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

module.exports = HttpException;
