/**
 * Created by xueln on 2017/11/14.
 */
import {combineReducers} from 'redux';
import {  routerReducer} from 'react-router-redux'
import home from './home'
import session from './session'
let reducer=combineReducers({
    home,
    routerReducer,
    session
});
export default reducer;