<template>
    <div>
        {{type}}
    </div>

</template>
<script>
  import {mapState,mapGetters} from 'vuex'
    export default {

        created(){
        },
        methods: {},
        computed: {
          ...mapGetters(['type'])
        },
        components: {}

    }
</script>
<style scoped lang="less">

</style>
