import React, {Component} from 'react';
import '../style/common.less'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from "./Home/index";
import Food from "./Food/index";
import Profile from "./Profile/index";
import Tab from "../components/Tab/index";
import Protected from "../components/Protected/index";
import Detail from "./Detail/index";
import Login from "./Login/index";
import Register from "./Register/index";
import { ConnectedRouter} from 'react-router-redux'
import createHashHistory from 'history/createHashHistory'
const history = createHashHistory()

export default class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Protected path="/food" component={Food}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/detail" component={Detail}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
          </Switch>
          <Tab/>
        </div>
      </ConnectedRouter>
    )
  }
}