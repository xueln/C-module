let mongoose =require('mongoose')
mongoose.Promise=Promise;
let connection=mongoose.createConnection('mongodb://localhost:27017/mongodb');
let UserSchema=new mongoose.Schema({
    name:String,
    age:Number
})
let UserModel=connection.model('User',UserSchema);

// UserModel.create({name:'xuelina',age:28},function(err,doc){
//     console.log(err);
//     console.log(doc)
// })
// UserModel.update({name:'xuelina'},{age:18},{multi:true},function(err,doc){
//     console.log(err);
//     console.log(doc)
// })
// UserModel.remove({name:'xuelina'},function(err,doc){
//     console.log(err);
//     console.log(doc)
// })
let users=[];
for(let i=0;i<=10;i++){
    users.push({name:'af'+i,age:i})
}
UserModel.create(users,function(err,docs){
    console.log(docs)
})
// UserModel.find({age:{$lte:18}},function(err,docs){//查找小于等于18
//     console.log(docs)
// })
UserModel.find({}).sort({age:-1}).skip(3).limit(3).exec(function(err,doc){
    console.log(doc,'高级查询')
})