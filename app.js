const express = require("express")
const path = require("path")
const puerto = 3030 
const app = express()

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.use(express.static('public'));

app.listen(puerto, () =>
 console.log("Servidor corriendo"))
