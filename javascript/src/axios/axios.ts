/*
Implement axios oauth client as middleware (interceptor) for the axios instance 
to be used for all API calls
*/

/* eslint-disable @typescript-eslint/naming-convention */

import axios from "axios";
import oauth from "axios-oauth-client";
import tokenProvider from "axios-token-interceptor";
import {
  TEST_API_URL,
  TEST_OAUTH2_URL,
  LIVE_API_URL,
  LIVE_OAUTH2_URL,
} from "../config/urls-config";

export function getAxiosInstance(
  clientId: string,
  clientSecret: string,
  env: "PRODUCTION" | "DEVELOPMENT"
) {
  let OAUTH2_URL = TEST_OAUTH2_URL;
  let API_URL = TEST_API_URL;

  if (env === "PRODUCTION") {
    OAUTH2_URL = LIVE_OAUTH2_URL;
    API_URL = LIVE_API_URL;
  }

  const getClientCredentials = oauth.client(axios.create(), {
    url: OAUTH2_URL,
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
  });

  const clientAxios = axios.create({
    baseURL: API_URL,
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
