<template>
  <div>
    <Navheader title="收藏页" back="true"></Navheader>
    <div class="content">
      <ul>
        <li v-for="item in filterCollect">

            <img v-lazy="item.bookCover"/>

          <div>
            <p><span>《</span><span v-html="item.bookName"></span><span>》</span></p>
            <p v-html="item.bookInfo"></p>
            <p><span>￥</span><span v-html="item.bookPrice"></span></p>
            <p>
              <router-link :to="{name:'detail',params:{id:item.id}}" tag="button">详情</router-link>
              <button @click="cancelCollect(item)">取消收藏</button>
            </p>
          </div>

        </li>
      </ul>
    </div>
    <Tab></Tab>
  </div>

</template>
<script>
  import Navheader from '../base/nav'
  import Tab from '../base/tab'
  import {mapState,mapMutations,mapGetters} from 'vuex';
  import * as Types from '../vuex/mutations-type'
  export default {
    data(){
      return {msg: 'sdhsdkhskd'}
    },
    created(){
    },
    methods: {
      ...mapMutations([Types.CANCEL_COLLECT]),
      cancelCollect(item){
          this[Types.CANCEL_COLLECT](item)
      }

    },
    computed: {

      ...mapGetters(['filterCollect'])

    },
    components: {
      Navheader,
      Tab
    }

  }
</script>
<style scoped lang="less">
  li{
    text-align: center;
    margin-bottom: 20px;
    background: rgba(249,234,234,0.42);
    padding:5px;
  }
  img{
    width:200px;
    height:200px
  }
</style>
