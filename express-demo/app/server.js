/**
 * Created by xueln on 2017/10/28.
 */
let express =require('express');
let user=require('./routes/user.js');
let article=require('./routes/article.js')
let app=express();
app.use('/user',user);
app.use('/article',article)
app.listen(8080,function(){})