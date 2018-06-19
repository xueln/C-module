<template>
    <div>
        <div class="col-md-3 col-sm-3">
            <ul class="nav nav-pills nav-stacked">
                <li><router-link to="/profile/introduce">简介</router-link></li>
                <li><router-link to="/profile/aboutme">关于</router-link></li>
            </ul>
        </div>
        <div class="col-md-9 col-sm-9">
            <router-view></router-view>
        </div>



    </div>
    
</template>
<script>

    export default {
        data(){
            return {msg:'个人中心'}
        },
        created(){},
        methods:{},
        computed:{},
        components:{}
    
    }
</script>
<style scoped lang="less">
    
</style>