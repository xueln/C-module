/**
 * Created by xueln on 2017/11/4.
 */
class LikeBtn extends Component{

    constructor(props){
        super(props)
        this.state={isLiked:false}
        this.handleClick=this.handleClick.bind(this);
        this.setState=this.setState.bind(this)
    }
    handleClick(){
        let likeText=document.querySelector('.like-text')
        this.setState({isLiked:!this.state.isLiked})

    }

    render(){
        this.element=this.createDOMFromString(
            `<button class="like-btn" style='color:${this.props.color}'>
        <span class="like-text">${this.state.isLiked?'取消':'点赞'}</span>
    </button>`
        )
        this.element.addEventListener('click',this.handleClick)
        return this.element
    }
}