#!/usr/bin/node

const fs = require('fs');

function readFile(filePath) {
  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      console.error(`An error occurred while reading the file: ${error}`);
    } else {
      console.log(data);
    }
  });
}
if (process.argv.length >= 3) {
  const filePath = process.argv[2];
  readFile(filePath);
} else {
  console.error('Please provide a file path as an argument.');
}
