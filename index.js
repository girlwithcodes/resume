#! /usr/bin/env node

const fs = require("fs");

fs.readFile(__dirname + "/info.json", "utf8", function(err, data {
  if (err) {
    console.error(error);
  } else {
    console.log(data);
    return data;
  }
}));