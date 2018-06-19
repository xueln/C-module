/**
 * Created by xueln on 2017/11/16.
 */
export function upPull(ele,cal){//下拉
    let timer;
    ele.onscroll=(e)=>{
        if(timer) clearTimeout(timer);
        timer=setTimeout(
            function(){
                if(e.target.scrollTop>=e.target.scrollHeight-e.target.clientHeight){
                    cal();
                }
            },80
        )


    }
}
export function downPull(ele,cal){
    ele.addEventListener('touchstart',fresh)
    let Y=0;
    let T=ele.offsetTop;
    function fresh(e){
        Y=e.targetTouches[0].pageY
        ele.addEventListener('touchmove',move);
        ele.addEventListener('touchend',stop);

    }
    function move(e){
        if(ele.offsetTop==T&&ele.scrollTop==0){
            let newY=e.targetTouches[0].pageY;
            if(newY>Y){
                ele.style.top=T+newY-Y+'px'

            }else{
                ele.removeEventListener('touchmove',move)
                ele.removeEventListener('touchend',stop)
            }
            if(newY-Y>50){
               cal();
            }
        }

    }
    function stop(){
        ele.removeEventListener('touchmove',move)
        ele.removeEventListener('touchend',stop)
        let timerId=setInterval(function(){
            if(ele.offsetTop<=T){
                ele.style.top=T+'px'
            }else{
                ele.style.top=ele.offsetTop-1+'px'
            }
        },1)
    }
}