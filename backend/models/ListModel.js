import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const List = db.define(
  "lists",
  {
    content: DataTypes.STRING,
    status: DataTypes.STRING,
  },
  { freezeTableName: true }
);

export default List;

// execute when there is no table in DB
(async () => {
  await db.sync();
})();
