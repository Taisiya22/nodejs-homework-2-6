const { Contact } = require("../../models");

const add = async (req, res, next) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({...req.body, owner});
  res.status(201).json(result);
};

module.exports = {
  add,
};
