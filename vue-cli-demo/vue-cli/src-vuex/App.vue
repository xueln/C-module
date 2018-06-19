<template>
    <div>
        <Counter></Counter>
      <Type></Type>
    </div>

</template>
<script>
  import Counter from './counter.vue'
  import Type from './type.vue'
    export default {
        data(){
            return {msg: 'sdhsdkhskd'}
        },
        created(){
        },
        methods: {},
        computed: {},
        components: {
            Counter,
          Type
        }

    }
</script>
<style scoped lang="less">

</style>
