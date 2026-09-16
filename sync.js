const fs=require("fs");
fs.writeFileSync("aviral.txt","This is the Experiment 2");
console.log("File created successfully");
const read=fs.readFileSync("aviral.txt","utf-8");
console.log(read);
fs.appendFileSync("aviral.txt","\nThis is the Experiment 2");
consle.log("File updated successfully");
