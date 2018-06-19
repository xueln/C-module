/**
 * Created by xueln on 2017/11/4.
 */
class Component{
    constructor(props){
        this.props=props;
    }
    createDOMFromString(str){
        let div=document.createElement('div');
        div.innerHTML=str;
        return div.firstElementChild;
    }
    setState(newState){
        this.state=Object.assign({},this.state,newState)

        let parent=this.element.parentNode;
        this.oldEle=this.element;
        parent.removeChild(this.oldEle)

        parent.appendChild(this.render())


    }
    mount(container){
        container.appendChild(this.render());
    }
}