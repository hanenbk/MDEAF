const express = require('express')
const bodyParser = require('body-parser')
const upperCaseFirst = require('upper-case-first')
const upperCase = require('upper-case')
const Type = require('type-of-is');
const hasOwnProperty = require('has-own-property')
const app = express()
var array = require('array');
//var couleurs=[]
var convertedArray=[]
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/colors', function (req, res) {
    //var valin = { ink: ['red', 'blue', 'green'] }
   // output = { colors: 'Red,Blue,Green', formula: 'RBG' }
    var chaine=''
    if (hasOwnProperty(req.body, 'ink')) {
        couleurs = array();
        couleurs = req.body.ink.replace(/'/g, '"');
        couleurs = JSON.parse(couleurs);
        
       // console.log(couleurs[0])
        if (hasOwnProperty(req.body, 'limit')) {
            couleurs.forEach(function (value, i) {
                if(i<req.body.limit)
               { convertedArray.push(upperCaseFirst(value))
                chaine=chaine+value.substr(0,1)
               }
            })
        }
        else   
       {
      /*  for (var i = 0; i <couleurs.length; i++) {
               
               couleurs[i]=upperCaseFirst(couleurs[i])
               //console.log( couleurs[i])
               chaine=chaine+couleurs[i].substr(0,1)
        }*/
        couleurs.forEach(function (value, i) {
            convertedArray.push(upperCaseFirst(value))
            chaine=chaine+value.substr(0,1)
        })
        

       }
       res.send({ "colors":convertedArray.join() ,"formula":`${upperCase(chaine)}`})
       convertedArray=[]
    }
    

       
    
   

})
app.listen(3000)