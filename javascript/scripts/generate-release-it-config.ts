import * as fs from "fs";

let GITHUB_TOKEN = process.env["GITHUB_TOKEN"] || "";

const codeToGenerate = `{
    "hooks": {},
    "git": {
        "changelog": "git log --pretty=format:\\"* %s (%h)\\" \${from}...\${to}",
        "requireCleanWorkingDir": true,
        "requireBranch": false,
        "requireUpstream": true,
        "requireCommits": false,
        "addUntrackedFiles": false,
        "commit": true,
        "commitMessage": "Release \${version}",
        "commitArgs": [],
        "tag": true,
        "tagName": null,
        "tagMatch": null,
        "tagAnnotation": "Release \${version}",
        "tagArgs": [],
        "push": true,
        "pushArgs": ["--follow-tags"],
        "pushRepo": ""
    },
    "npm": {
        "publish": true,
        "publishPath": ".",
        "publishArgs": [],
        "tag": null,
        "otp": null,
        "ignoreVersion": false,
        "allowSameVersion": false,
        "versionArgs": [],
        "skipChecks": false,
        "timeout": 10
    },
    "github": {
        "release": true,
        "releaseName": "Release \${version}",
        "releaseNotes": null,
        "autoGenerate": true,
        "preRelease": false,
        "draft": false,
        "tokenRef": "${GITHUB_TOKEN}",
        "assets": null,
        "host": null,
        "timeout": 0,
        "proxy": null,
        "skipChecks": false,
        "web": false
    }
  }`;

fs.writeFile("release-it.json", codeToGenerate, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("config file was saved!");
});
