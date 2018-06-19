<template>
    <div>
        <span @click="change">{{msg}}</span>{{$route.params.id}}{{$route.params.name}}
    </div>

</template>
<script>
    export default {
        data(){
            return {msg: '文章'}
        },
        watch:{
            $route(){
                alert('路由变了')
            },
            msg(){
                alert('内容变了')
            }
        },
        created(){
        },
        methods: {
            change(){
                this.msg="变变变"
            }
        },
        computed: {},
        components: {}

    }
</script>
<style scoped lang="less">
    div{
        color:#999999;
    }
</style>