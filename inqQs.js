const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "list",
        name: "location",
        message: "Where are you?",

    },
    {
        type: "input",
        name: "bio",
        message: "Telll me a bit about yourself.",
    },
    {
        type: "input",
        name: "linkedin",
        message: "What is your linkedin URL?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?",
    },
]

module.exports = {questions}