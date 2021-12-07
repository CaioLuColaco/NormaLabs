const express = require('express')
const server = express()
const nunjucks = require("nunjucks")
const routes = require("./routes")

server.set("view engine", "html")

server.use(express.urlencoded({ extended: true }))
server.use(routes)
server.use(express.static('views'))
server.use(express.static('views/public'))

nunjucks.configure("views", {
    express: server
});

server.listen(5000, function(){
    console.log("server is running")
})
