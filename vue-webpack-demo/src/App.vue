<template>
    <div>

        <Tab></Tab>
        <router-view></router-view>

    </div>

</template>
<script>
    import Tab from './components/tab.vue'
    export default {
        data(){
            return {msg:'app'}
        },
        created(){},
        methods:{},
        computed:{},
        components:{
            Tab
        }

    }
</script>
<style>
    .link-active{
        color:pink!important;
    }
    .current-active{
        color:yellow!important;
    }
</style>