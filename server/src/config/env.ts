import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

const NODE_ENV = process.env.NODE_ENV || 'development';
const SERVER_PORT = (process.env.SERVER_PORT || 8080) as number;
const SERVER_URL = process.env.SERVER_URL
  ? process.env.SERVER_URL
  : `http://localhost:${SERVER_PORT}`;

const CLIENT_PORT = (process.env.CLIENT_PORT || 3000) as number;
const CLIENT_URL = process.env.CLIENT_URL
  ? process.env.CLIENT_URL
  : `http://localhost:${CLIENT_PORT}`;

const ALLOWED_ORIGINS = [SERVER_URL, CLIENT_URL];

const env = {
  NODE_ENV,
  SERVER_PORT,
  SERVER_URL,
  CLIENT_URL,
  ALLOWED_ORIGINS,
};

export default env;
