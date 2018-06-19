/**
 * Created by xueln on 2017/10/15.
 */
let sum=(...args)=>{
    return args.reduce((prev,next)=>{
        return prev+next;
    })
}
module.exports=sum;