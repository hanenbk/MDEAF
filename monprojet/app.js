/*let d;
const cal=function(a,b){

    
    
    c=a+b;
    d= c===7 ?'val1':'val2'
}

console.log("bonjour");*/
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.post('/login', function (req, res) {
    var msg={"message":'error',"ok":"hello" + req.body.username}
    if (req.body.passwd != '123') //return res.sendStatus(400)

       // res.send({ "message": "error" })
       res.send(msg.message)
    else
       // res.send({ "message": "hello" + req.body.username })
        res.send(msg.ok)
    ///ou bien
   // res.send({ "message": `hello ${req.body.username}` })
})


app.post('/test', function (req, res) {
    //check the key available in json
    if(typeof req.body.name === 'string') {
    if(req.body.hasOwnProperty('name')&&req.body.hasOwnProperty('lastname')){
       
        res.send({ "message":  `hello ${req.body.name.substr(0, 1).toUpperCase()}${req.body.name.substr(1)}  ${req.body.lastname.toUpperCase()}`})
    }
}
else
 res.send({ "message":'error'})
})
app.get('/', function (req, res) {
    res.send('Hello World')

})

app.get('/home', (req, res) => {

    res.redirect('http://www.facebook.com');
})
app.post('', (req, res) => {
    res.send('this is is post ')

})

app.get('/accueil', function (req, res) {
    res.sendFile(__dirname + '/test.html')

})



app.listen(3000)


