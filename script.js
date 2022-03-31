/* 1 Skapa ett git-repository i en mapp där du jobbade med övningarna. Skriv "git init" i terminalen. Träna på att använda: git add, git commit, git status. Om något går fel kan du ta bort ".git" mappen och börja om. */

/* 2 Skapa ett repository på GitHub för projektet. Koppla ihop det med ditt lokala repo med hjälp av instruktionerna på GitHub. Pusha din kod. */

/* 3 Skapa en branch med namnet "feature-branch" och träna på att växla till den. Gör en ny fil och committa den till branchen. */

console.log('Det funkar')

const express = require('express')
const app = express()
const PORT = 1337

app.listen(PORT, () => {
  console.log(`Porten ${PORT} funkar`)
})

app.get('/', (req, res) => {
  res.sendFile('/index.html', { root: __dirname })
})

// använd annan js fil in den huvudsakliga js-filen

const jsTestfile = require('./testfile.js')

console.log(jsTestfile)
