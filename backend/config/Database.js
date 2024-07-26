import { Sequelize } from "sequelize";

const db = new Sequelize("db_todo_list", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
