const express  = require("express")
const app =  express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/",( req, resp) =>{
    resp.render("index");
});

app.get("/pergunta", (req, resp) =>{
    resp.render("pergunta");
})


app.listen(5050, ()=>{
    console.log("App rodando");
});