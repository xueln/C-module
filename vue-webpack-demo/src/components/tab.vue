<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">
                        <img alt="Brand">
                    </a>
                </div>
                <ul class="navbar-nav nav">
                    <li>
                        <router-link to="/home" >home</router-link>
                    </li>
                    <li>
                        <router-link to="/profile">profile</router-link>
                    </li>
                    <li>
                        <router-link to="/article">article</router-link>
                    </li>
                </ul>
            </div>
        </nav>



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

</style>