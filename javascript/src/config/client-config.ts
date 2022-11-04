export const OAUTH2_URL = process.env.OAUTH2_URL;

export const API_URL = process.env.API_URL;

const account_auth_data = {
  username: process.env.CLIENT_ID!,
  password: process.env.CLIENT_SECRET!,
};

export const AUTH_DATA = account_auth_data;
