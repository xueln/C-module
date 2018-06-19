/**
 * Created by xueln on 2017/11/11.
 */

function renderTitle(data){
    let title=document.querySelector('#title')
    title.innerHTML=data.text;
    title.style.color=data.color
}
function renderContent(data){
    let content=document.querySelector('#content')
    content.innerHTML=data.text;
    content.style.color=data.color
}

function renderApp(appState){
    renderTitle(appState.title);
    renderContent(appState.content);
}
let createStore=(reducer)=>{
    let appState;
    let getState=()=>appState;
    let listeners=[];

    function dispatch(action){
        appState=reducer(appState,action);
        listeners.forEach(item=>item())
        }

    function subscribe(fn) {
        listeners.push(fn)

    }
    return {
        getState,
        dispatch,
        subscribe
    }
}
let initialState={
    defaultColor:'yellow',
    title:{
        text:'标题',
        color:'red'
    },
    content:{
        text:'内容',
        color:'blue'
    }
};
function reducer(state=initialState,action){

        switch (action.type){
            case 'UPDATE_TITLE_TEXT':
                return {...state,title:{...state.title,text:action.payload.text,color:action.payload.color}}

            case 'UPDATE_TITLE_COLOR':
                return {...state,content:{...state.content,text:action.payload.text,color:action.payload.color}}
            default:
                return state;
                break;
        }


}
let store=createStore(reducer)

store.subscribe(()=>{
    renderApp(store.getState());
})
store.dispatch({type:'UPDATE_TITLE_TEXT',payload:{text:'777878773',color:'red'}})


