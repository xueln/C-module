<template>
    <div class="main">

          <div v-if="!isLoaded" class="load"></div>
          <div v-if="!hasData" class="nodata"></div>

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
        components: {},
        props:{
            isLoaded:{
                type:Boolean
            },
            hasData:{
                type:Boolean
            }
        }

    }
</script>
<style scoped lang="less">
  .main{
    height:70%;
  }
  .load{
    background:url(http://img.zcool.cn/community/01bcea57075db16ac7257948927c5c.gif) no-repeat center;
    background-size:contain;
    height:100%;
  }
  .nodata{
    background:url(http://static.oschina.net/uploads/space/2015/0706/204621_Q4IV_2353202.jpg) no-repeat center;
    background-size:contain;
    height:100%;
  }
</style>
