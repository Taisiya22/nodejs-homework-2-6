const { getAll } = require("./getAll");
const { getById } = require('./getById');
const { add } = require("./add");
const { updateById } = require("./upadteById");
const { updateFavorite } = require("./updateFavorite");
const {deleteById } = require("./deleteById")

module.exports = {
    getAll,
    getById,
    add,
    updateById,
    updateFavorite,
    deleteById
}