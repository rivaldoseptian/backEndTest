module.exports = (error, request, response, next) => {
  let message = "Internal Server Error";
  let status = 500;

  switch (error.name) {
    case "FAILED (Id not found)":
      message = error.message;
      status = 404;
      break;
    case "SequelizeValidationError":
    case "SequelizeUniqueValidationError":
    case "SequelizeUniqueConstraintError":
      status = 400;
      message = error.errors[0].message;
      break;
    case "FAILED (body blank)":
      status = 400;
      message = "title cannot be null";
      break;
    default:
      message = "Internal Server Error";
      status = 500;
      break;
  }
  response.status(status).json({ message: message });
};
