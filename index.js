const inquirer = require("inquirer");
const fs = require("fs")

const generateHTML= require("./genHTML")
const {questions } = require("./inqQs")

inquirer
    .prompt(questions)
    .then((response) => {
        fs.writeFile("index.html",generateHTML(response), err=> err?console.log(err):"")
    })
    .catch(err=>console.log(err));
// name, location, bio, LinkedIn URL, and GitHub URL
