<template>
    <div  >
        <div v-if="loading" class="loading">

        </div>
        <div v-if="data" class="no-data"></div>
    </div>

</template>
<script>
    export default {
        data(){
            return {msg: 'sdhsdkhskd'}
        },
        created(){
        },
        props:{
            loading:{type:Boolean},
            data:{}
        },
        methods: {},
        computed: {},
        components: {}

    }
</script>
<style scoped lang="less">

  .no-data{
    height:400px;
    background: url('../../static/nodata.png') no-repeat center;

    background-size:contain;
  }
  .loading{
    height:400px;
    background: url('../../static/loading.gif') no-repeat center;

    background-size:contain;
  }

</style>
