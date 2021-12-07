const fs = require("fs")
const data = require("./data.json")

exports.post = function(req, res) {
    const keys = Object.keys(req.body)
    
    for(key of keys) {
        if(req.body[key] == "") {
            return res.send('Por favor, preencha todos os campos')
        }
    }

    let { email, name, assunto, setor, menssagem } = req.body

    const created_at = Date.now()
    const id = Number(data.message.length + 1)

    data.message.push({
        id,
        name,
        setor,
        email,
        assunto,
        menssagem,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write file error")

        return res.redirect("/")
    })

}