const express = require('express')
const server = express()
const nunjucks = require("nunjucks")

server.set("view engine", "html")

server.use(express.static('views'))
server.use(express.static('public'))

nunjucks.configure("views", {
    express: server
});

server.get("/", function(req, res){
    return res.render("home")
})

server.listen(5000, function(){
    console.log("server is running")
})
