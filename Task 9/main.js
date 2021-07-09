// RUDRANSH AGGARWAL ----> Task 9-WEB
const fs = require('fs');
// CREATE
fs.writeFileSync('Rudransh.txt',"sup-Rudransh");

// READ
let read = fs.readFileSync('Rudransh.txt');
console.log(read.toString());

// UPDATE
fs.appendFileSync('Rudransh.txt',"          This is the appended data-Rudransh ");

// Delete
fs.unlinkSync('Rudransh.txt');

