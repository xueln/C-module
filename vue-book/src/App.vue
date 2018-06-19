<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>

export default {

}
</script>

<style lang="less">
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
    background: #27a9f4;
    border:none;
    border-radius:3px;

    color:#fff;
  }
  body *{
    font-size: 14px;
    font-family: Arial;

  }
  .content{
    position:absolute;
    top:50px;
    bottom: 50px;
    left:0;
    right:0;
    overflow-y: scroll;
  }
  .bigBtn{
    text-align:center;
    height:30px;
    line-height:30px;
    font-size:16px;
    width:30%;
    margin-left:35%;
  }
</style>
