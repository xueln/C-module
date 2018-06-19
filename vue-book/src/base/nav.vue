<template>
    <div>
      <i v-if="back" @click="goback" class="iconfont icon-fanhui-copy"></i>
      {{title}}
    </div>

</template>
<script>
    export default {
        data(){
            return {msg: 'sdhsdkhskd'}
        },
        created(){
        },
        props:['title','back'],
        methods: {
            goback(){
                this.$router.back();
            }
        },
        computed: {},
        components: {}

    }
</script>
<style scoped lang="less">
    div{
      height:50px;
      background:linear-gradient(#ee4b47,#ff8040);
      text-align: center;
      font-size: 18px;
      color:black;
      position: fixed;
      top:0;
      left:0;
      width:100%;
      line-height:60px;
      color:#fefefe;
    }
  i{
    font-size: 28px;
    float:left;
    margin-left: 10px;

  }
</style>
