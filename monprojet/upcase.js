
const express = require('express')
const bodyParser = require('body-parser')
const upperCaseFirst = require('upper-case-first')
const upperCase = require('upper-case')
const Type = require('type-of-is');
const hasOwnProperty = require('has-own-property')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/test', function (req, res) {
    
    
        //check the key available in json
    //if(req.body.hasOwnProperty('name')&&req.body.hasOwnProperty('lastname')){
    //if(req.body.name){}
    if(hasOwnProperty(req.body, 'name')&&hasOwnProperty(req.body, 'lastname')){
    // if(typeof req.body.name === 'string') {
        if(Type.is(req.body.name, String)==true ){
       // res.send({ "message":  `hello ${req.body.name.substr(0, 1).toUpperCase()}${req.body.name.substr(1)}  ${req.body.lastname.toUpperCase()}`})
       res.send({ "message":  `hello ${upperCaseFirst(req.body.name)} ${upperCase(req.body.lastname)}`})
    }
    else
     res.send({ "message":'error'})
    }
else
res.send({ "message":'you must give your name and lastname'})
})







app.listen(3000)


