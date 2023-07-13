import { Sequelize } from "@sequelize/core";
import 'dotenv/config'

const env: any = process.env.NODE_ENV || 'development';
const config: any = require(__dirname + '/config/config.ts')[env];


const port = process.env.PORT;

const connection = new Sequelize(config.database, config.username, config.password, config);

export default connection;