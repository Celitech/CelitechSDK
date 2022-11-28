import * as fs from "fs";

let TEST_OAUTH2_URL =
  "https://test-core-partners.auth.us-east-1.amazoncognito.com/oauth2/token";
let TEST_API_URL =
  "https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test";

let LIVE_OAUTH2_URL =
  process.env["OAUTH2_URL"] || "https://auth.celitech.net/oauth2/token";
let LIVE_API_URL = process.env["API_URL"] || "https://api.celitech.net/v1";

const codeToGenerate =
  `export const TEST_OAUTH2_URL = "${TEST_OAUTH2_URL}";\n` +
  `export const TEST_API_URL = "${TEST_API_URL}";\n` +
  `\n` +
  `export const LIVE_OAUTH2_URL = "${LIVE_OAUTH2_URL}";\n` +
  `export const LIVE_API_URL = "${LIVE_API_URL}";\n`;

if (!fs.existsSync("src/config")) {
  fs.mkdirSync("src/config");
}

fs.writeFile("src/config/urls-config.ts", codeToGenerate, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("config file was saved!");
});
