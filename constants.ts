import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

// Postgresql setup
export const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'xxxx';
export const MYSQL_USERNAME = process.env.MYSQL_USERNAME || 'xxxx';
export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || 'xxxx';
