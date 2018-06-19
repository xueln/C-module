<template>
  <ul>
    <router-link to="/" exact tag="li">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list" tag="li">
      <i class="iconfont icon-liebiaoyetuanqi"></i>
      <span>列表页</span>
    </router-link>
    <router-link to="/collect" tag="li">
      <i class="iconfont icon-shoucang"></i>
      <span>收藏页</span>
    </router-link>
    <router-link to="/add" tag="li">
      <i class="iconfont icon-icon02"></i>
      <span>添加</span>
    </router-link>
  </ul>

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
  ul{
    position:fixed;
    bottom:0;
    height:50px;
    left:0;
    width:100%;
    display: flex;
    background:linear-gradient(#7f7b7b,black);
    color:#fff;
    border-top:1px solid slategrey;
    color:#a2a2a2;
    li{
      display: flex;
      flex:1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 14px;
    }
    .router-link-active{
      text-shadow:1px 1px 1px #999;
      color:blue;
    }
  }
</style>
