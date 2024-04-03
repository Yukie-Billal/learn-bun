import { Sequelize } from "sequelize";

const db = new Sequelize('todos-api', 'useradmintodo', 'hkDYYsa4QLc4O8w(', {
   host: 'localhost',
   dialect: 'mysql',
   logging: false
})

export default db;