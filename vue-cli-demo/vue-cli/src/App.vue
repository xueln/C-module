<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from './base/tab'
export default {
  components:{
     Tab
 }
}
</script>

<style>
  body,p,h1,h2,h3,h4,h5,h6,dl,dd{margin:0;font-size:12px;}
  ol,ul,li{list-style:none;margin:0;padding:0;}
  pre,form,textarea,th,td,select{margin:0;padding:0;}
  em{font-style:normal;}
  a{text-decoration:none}
  img{border:none;vertical-align:top;}
  table{border-collapse:collapse;}
  textarea{resize:none;overflow:auto;}
  /*input,textarea{border:none;outline:none}*/
  a,input,button{
    -webkit-tap-highlight-color:rgba(0,0,0,0);
  }
  button{
    border: none;
    outline: none;
    padding:3px;
    font-size: 14px;
    color:#fff;
    background: #007aff;
    border-radius: 3px;
  }
  /*input,button{*/
    /*-webkit-appearance:none;*/
    /*border-radius:0;*/
  /*}*/
 html,body{
    width:100%;
    height:100%;
    overflow: hidden;
  }
  .content{
    position: fixed;
    top:50px;
    bottom: 50px;
    left:0;
    right:0;
    overflow-y: scroll;

  }
  input[type=text]{
    height:20px;
    line-height: 20px;
  }
  label{
    font-size: 14px;
  }
</style>
