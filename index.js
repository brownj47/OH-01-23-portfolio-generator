// const inquirer = require("inquirer");
// const fs = require("fs");

// inquirer
//     .prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "What is your name?",
//         },
//         {
//             type: "input",
//             name: "location",
//             message: "Where are you located?",
//         },
//         {
//             type: "input",
//             name: "bio",
//             message: "Tell me a bit about yourself!",
//         },
//         {
//             type: "input",
//             name: "linkedin",
//             message: "What is your linkedin URL?",
//         },
//         {
//             type: "input",
//             name: "github",
//             message: "What is your github username?",
//         },
//     ])
//     .then((responses) => {
//         console.log(responses);
//         fs.writeFile(
//             "index.html",
//             `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Generated Portfolio</title>
//         <link rel="stylesheet" href="./style.css">
//     </head>
//     <body>
//         <header>
//             <h1>My Portfolio</h1>
//         </header>
//         <main>
//             <h2>${responses.name}:</h2>
//             <p>${responses.location}</p>
//             <p id="bio">${responses.bio}</p>
//             <p>LinkedIn:<a href="${responses.linkedin}">${responses.linkedin}</a></p>
//             <p>Github: <a href="https://github.com/${responses.github}">${responses.github}</a></p>
//         </main>
//         <footer>
//             <p>Made in 2023 using node.js</p>
//         </footer>
//     </body>
//     </html>`,
//             (err) => (err ? console.log(err) : "")
//         );
//     })
//     .catch((err) => console.log(err));

// name, location, bio, LinkedIn URL, and GitHub URL


