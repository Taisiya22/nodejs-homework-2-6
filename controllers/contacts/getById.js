const { Contact } = require("../../models");
const { ctrlWrapper, HttpError } = require("../../helpers");

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getById: ctrlWrapper(getById),
};
