const express = require('express');
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))//for serving static files
app.use(express.urlencoded())

//PUG SPECIFI STUFF
app.set('view engine', 'pug');//set the templete engine as pub
app.set('views', path.join(__dirname,'views'));//set the view directory

//Endpoint
app.get("/", (req,res)=>{
    const  con = "this is the best content on the internat so far use it wisely"
    const params = {'title': 'Pubg is the best game ' , "content" : con}
    res.status(200).render('index.pug', params)
});

app.post('/' , (req,res)=>{
    
    fullName = req.body.name
    age = req.body.age
    gender= req.body.gender
    address = req.body.address
    more = req.body.more
    let outputToWrite = `the name of the client is ${fullName} , ${age} year old , ${gender} ,residing at ${address} , More about her/him ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your Form Has Been Submited Successfully '};
    res.status(200).render('index.pug', params)
})

//START THE SERVER
app.listen(port , ()=>{
    console.log(`this application start sucessfull on port ${port}`)
});