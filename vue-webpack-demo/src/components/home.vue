<template>
    <div>
        {{msg}}
        <button @click="go">back</button>
    </div>
    
</template>
<script>
    export default {
        data(){
            return {msg:'首页'}
        },
        created(){},
        methods:{
            go(){
                //this.$router.push('/profile/aboutme')
                //this.$router.replace('/profile/aboutme')
                this.$router.go(-1);
            }
        },
        computed:{},
        components:{}
    
    }
</script>
<style scoped lang="less">
    button{
        border:1px solid black;
        background: none;
        color:red;

    }
</style>