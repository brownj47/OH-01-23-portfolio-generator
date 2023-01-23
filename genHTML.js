const generateHTML= (response)=>{
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Generated Portfolio</title>
            <link rel="stylesheet" href="./style.css" />
        </head>
        <body>
            <header>
                <h1>My Portfolio</h1>
            </header>
            <main>
                <h2>${response.name}:</h2>
                <p>${response.location}</p>
                <p id="bio">${response.bio}</p>
                <p>
                    LinkedIn:<a href="${response.linkedin}" target="_blank">${response.linkedin}</a>
                </p>
                <p>
                    Github:
                    <a href="https://github.com/${response.github}" target="_blank"
                        >${response.github}</a
                    >
                </p>
            </main>
            <footer>
                <p>Made in 2023 using node.js</p>
            </footer>
        </body>
    </html>`
}

module.exports = generateHTML