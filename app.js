const express = require('express');
const app = express();
//const port = 3000;
const redisPort = 6379;
const cookieParser = require('cookie-parser');


const redis = require('redis');
const client = redis.createClient(redisPort);

app.use(cookieParser());


app.get("/", function(req,res){
    //res.send({headers: req.headers})
    res.send("hallo");
})

//fuer Heroku
let port = process.env.PORT;
if (port == null || port === "") {
    port = 3000;
}

app.listen(port, () => {
    console.log(`Reisen reisen started successfully`);
    console.log(`Reisen reisen listening at http://localhost:${port}`);
})