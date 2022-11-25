import * as fs from "fs";

let OAUTH2_URL =
  "https://test-core-partners.auth.us-east-1.amazoncognito.com/oauth2/token";
let API_URL = "https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test";

const codeToGenerate =
  `export const OAUTH2_URL = "${OAUTH2_URL}";\n` +
  `export const API_URL = "${API_URL}";\n`;

if (!fs.existsSync("src/config")) {
  fs.mkdirSync("src/config");
}

fs.writeFile("src/config/urls-config.ts", codeToGenerate, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("config file was saved!");
});
