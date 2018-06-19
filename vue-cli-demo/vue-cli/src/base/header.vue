<template>
    <div class="header">
        <i class="iconfont icon-houtui" v-if="back" @click="goback"></i>
        <slot></slot>
    </div>

</template>
<script>
    export default {
        data(){
            return {msg: 'sdhsdkhskd'}
        },
        props:{
            back:{
                type:Boolean,
                default:false
            }
        },
        created(){
        },
        methods: {
            goback(){
                this.$router.go(-1);
            }
        },
        computed: {},
        components: {}

    }
</script>
<style scoped lang="less">
  .header{
    height:50px;
    background:linear-gradient(red,#722626);
    color:#fff;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    position:fixed;
    top:0;
    width:100%;
    i{
      position:absolute;
      left:20px;
      font-size: 15px;
    }
  }
</style>
