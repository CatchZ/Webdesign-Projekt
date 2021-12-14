const express = require('express');
const app = express();
const port = 3000

app.get("/", function(req,res){
    //res.send({headers: req.headers})
    res.send("hallo");
})

app.listen(port, () => {
    console.log(`Reisen reisen listening at http://localhost:${port}`)
})