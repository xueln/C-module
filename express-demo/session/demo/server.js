
let express =require('express');
let app=express();
let path=require('path');
let bodyParser=require('body-parser')
let cookieParser=require('cookie-parser')
let user=require('./route/user.js')
let index=require('./route/index.js')

let session=require('express-session')
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'1'
}))

app.set('view engine','html')
app.set('views',path.resolve('tmp'))
app.engine('html',require('ejs').__express)

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.use('/user',user)
app.use('/',index)



app.listen(8080,function(){})