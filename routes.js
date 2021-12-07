const express = require('express')
const routes = express.Router()
const message = require("./message")

routes.get('/', function(req, res) {
    return res.render("home")
})

routes.post("/", message.post)

module.exports = routes