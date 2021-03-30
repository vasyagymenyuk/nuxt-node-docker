const express = require("express");
const router = express.Router();
const path = require("path");
const { User } = require("../database/models/index");
const { QueryTypes } = require("sequelize");
const Sequelize = require("sequelize");
const sequelize = new Sequelize("node_docker_test_app", "root", "vasya", {
  dialect: "mysql",
});

// MAIN PAGE
exports.getMain = async (req, res) => {
  const user = {
    firstName: "vova",
    lastName: "gymenyuk",
    email: "vova@gmail.com",
    tel: "4873920",
    birthday: "2000",
    about: "iam teacher",
    password: "password123",
  };
  // const users = await sequelize.query(
  //   `INSERT INTO user (firstName,lastName,email,tel,birthday,about,password) VALUES ("${user.firstName}", "${user.lastName}", "${user.email}", "${user.tel}", "${user.birthday}", "${user.about}", "${user.password}");`,

  //   {
  //     type: QueryTypes.INSERT,
  //   }
  // );
  const users = await sequelize.query(
    `SELECT * FROM user;`,

    {
      type: QueryTypes.SELECT,
    }
  );

  res.json(users);
  res.end();
};
`INSERT INTO post (userId, title, body) VALUES (3, "fdsafdsa", "fdsafdsafdsa")`;
