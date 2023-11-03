const axios = require("axios");
const { User, Post } = require("../db");

const cleanArray = (arr) => {
  const clean = arr.map((elem) => {
    return {
      id: elem.id,
      name: elem.name,
      email: elem.email,
      phone: elem.phone,
      created: false,
    };
  });
  return clean;
};

const createUser = async (name, email, phone) => {
  return await User.create({ name, email, phone });
};

const getUserById = async (id, source) => {
  const user =
    source === "api"
      ? (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`))
          .data
      : await User.findByPk(id, {
          include: {
            model: Post,
            attributes: ["title", "body"],
          },
        });

  return user;
};

const getAllUsers = async () => {
  const dbUsers = await User.findAll();

  const apiUsersRaw = (
    await axios.get("https://jsonplaceholder.typicode.com/users")
  ).data;

  const apiUsers = cleanArray(apiUsersRaw);

  return [...dbUsers, ...apiUsers];
};

const searchUserByName = async (name) => {
  const dbUsers = await User.findAll({
    where: {
      name: name,
    },
  });

  const apiUsersRaw = (
    await axios.get("https://jsonplaceholder.typicode.com/users")
  ).data;

  const apiUsers = cleanArray(apiUsersRaw);

  const filteredApi = apiUsers.filter((user) => {
    return user.name === name;
  });
  return [...filteredApi, ...dbUsers];
};

module.exports = { createUser, getUserById, getAllUsers, searchUserByName };
