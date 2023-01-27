const express  = require("express")
const app =  express();

app.set('view engine', 'ejs');

app.get("/:nome/:lang",( req, resp) =>{
    var nome = req.params.nome;
    var lang = req.params.lang;
    resp.render("index", {
        nome:nome,
        lang:lang,
    });
});

app.listen(5050, ()=>{
    console.log("App rodando");
});