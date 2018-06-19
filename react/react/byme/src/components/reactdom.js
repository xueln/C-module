/**
 * Created by xueln on 2017/11/4.
 */
export default {
    render(ele,container){

        let pro=document.createElement(ele.type);
        for(let attr in ele.attrs){
            pro.setAttribute(attr,ele.attrs[attr])
        }
        if(typeof ele.children=='string'){
            pro.innerHTML=ele.children;
        }else{
            this.render(ele.children,pro)
        }

        container.appendChild(pro)

    }
}