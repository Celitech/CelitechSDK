import * as fs from "fs";

let OAUTH2_URL =
  process.env["OAUTH2_URL"] || "https://auth.celitech.net/oauth2/token";
let API_URL = process.env["API_URL"] || "https://api.celitech.net/v1";

const codeToGenerate =
  `export const OAUTH2_URL = "${OAUTH2_URL}";\n` +
  `export const API_URL = "${API_URL}";\n`;

if (!fs.existsSync("../src/config")) {
  fs.mkdirSync("config");
}

fs.writeFile("../src/config/urls-config.ts", codeToGenerate, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("config file was saved!");
});
