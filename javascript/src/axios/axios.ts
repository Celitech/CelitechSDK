/*
Implement axios oauth client as middleware (interceptor) for the axios instance 
to be used for all API calls
*/
import axios from "axios";
const oauth = require("axios-oauth-client"); // No TS support for this library - TS PR opened
import tokenProvider from "axios-token-interceptor";

export function getAxiosInstance(clientId: string, clientSecret: string) {
  const getClientCredentials = oauth.client(axios.create(), {
    url: "https://test-core-partners.auth.us-east-1.amazoncognito.com/oauth2/token",
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
  });

  const clientAxios = axios.create({
    baseURL: "https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test",
  });

  //Add interceptor (middleware) to axios instance
  clientAxios.interceptors.request.use(
    // Wraps axios-token-interceptor with oauth-specific configuration,
    // fetches the token using the desired claim method, and caches
    // until the token expires
    oauth.interceptor(tokenProvider, getClientCredentials)
  );

  return clientAxios;
}
