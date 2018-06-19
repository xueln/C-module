<template>
    <div>
        {{count}}
        <button @click="plusa">计数</button>
      <button @click="reducea">间</button>
    </div>

</template>
<script>
  import {mapState,mapMutations} from 'vuex'
    export default {
        data(){
            return {msg: ''}
        },
        created(){
        },
        computed:{
          ...mapState(['count'])
//            count(){
//                return this.$store.state.count
//            }
        },
        methods: {
          ...mapMutations(['plus','reduce']),
          plusa(){
                this.plus('改变')
              //this.$store.commit('plus','改变store')
          },
          reducea(){
              this.reduce()
            //this.$store.commit('reduce')
          }
        },

        components: {}

    }
</script>
<style scoped lang="less">

</style>
