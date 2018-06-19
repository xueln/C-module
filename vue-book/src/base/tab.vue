<template>
    <div>
        <ul>
          <li><router-link to="/" exact tag="span"><i class="iconfont icon-shouye"></i><p>首页</p></router-link></li>
          <li><router-link to="/list" tag="span"><i class="iconfont icon-icon-djt-mb_kechengliebiao"></i><p>列表页</p></router-link></li>
          <li><router-link to="/collect" tag="span"><i class="iconfont icon-yishoucang"></i><p>收藏页</p></router-link></li>
          <li><router-link to="/add" tag="span"><i class="iconfont icon-liaotianfuzhi"></i><p>添加</p></router-link></li>
        </ul>
    </div>

</template>
<script>

    export default {
        data(){
            return {msg: 'sdhsdkhskd'}
        },
        created(){
        },
        methods: {},
        computed: {},
        components: {}

    }
</script>
<style scoped lang="less">
  div{
    position: fixed;
    bottom:0;
    width: 100%;
    height:50px;
    background: linear-gradient(grey,black);
    color:#fff;


  }
  ul{
    display: flex;
    height:50px;
    li{
      flex:1;
      display: flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      span{
        text-align: center;
      i{
        font-size: 20px;
      }

      }
    }
  }
  .router-link-active{
    text-shadow:1px 1px 1px #999;
    color:blue;
  }
</style>
