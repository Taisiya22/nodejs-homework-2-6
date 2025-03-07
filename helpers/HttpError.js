const errorMessageList = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict"
}

const HttpError = (status, message = errorMessageList[status]) => {
  const error = new Error(message);
  status.error = status;
  return error;
};

module.exports = HttpError;
