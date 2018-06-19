/**
 * Created by xueln on 2017/11/5.
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import Slider from './components/slider.js'

let images=[
    require('./imgs/1.jpg'),
    require('./imgs/2.jpg'),
    require('./imgs/3.jpg')
]
let options={
    auto:true,
    speed:1,
    delay:5,
    arrow:true,
    dots:true,
    pause:false
}
ReactDOM.render(<Slider img={images} {...options}/>,document.querySelector('#app'))//{...options}