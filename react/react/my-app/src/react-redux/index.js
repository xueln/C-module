/**
 * Created by xueln on 2017/11/9.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './components/app'
import store from './store/index'

ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider>,document.querySelector('#root'))