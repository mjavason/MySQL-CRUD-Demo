import { Sequelize } from 'sequelize-typescript';
import { User, Profile } from './user.model';
import { MYSQL_DATABASE, MYSQL_PASSWORD, MYSQL_USERNAME } from './constants';

export const sequelize = new Sequelize(
  MYSQL_DATABASE,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  {
    dialect: 'mysql', // Choose your database dialect
    logging: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    models: [User, Profile],
  }
);

// Test the connection
export async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error: any) {
    console.error('Unable to connect to the database:', error.message);
  }
}

// Initialize Database
export async function initDB() {
  try {
    await sequelize.sync({ force: false, alter: true }); // `force: true` will drop tables
    console.log('Database synced successfully');
  } catch (err) {
    console.error('Unable to sync database:', err);
  }
}
