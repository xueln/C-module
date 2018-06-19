
let express =require('express');
let app=express();
let path=require('path');
let bodyParser=require('body-parser')
let cookieParser=require('cookie-parser')
let login=require('./route/signup.js')
let register=require('./route/signin.js')



app.set('view engine','html')
app.set('views',path.resolve('tmp'))
app.engine('html',require('ejs').__express)

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.use('/user',register)
app.use('/user',login)

app.get('/welcome',function(req,res){
    res.sendFile('./tmp/welcome.html',{root:__dirname})
})

app.listen(8080,function(){})