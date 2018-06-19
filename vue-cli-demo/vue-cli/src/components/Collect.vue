<template>
    <div>
      <Mheader :back="true">收藏页</Mheader>
      <div class="content">


        <ul class="hot">
          <li v-for="item in favors" class="book-item">
            <img v-lazy="item.bookCover" alt="图书" class="book-img"/>
            <div class="book-detail">
              <p  class="book-intro">{{item.bookName}}</p>
              <p  class="book-intro">{{item.bookInfo}}</p>
              <p  class="book-intro"> ￥{{item.bookPrice}}</p>
              <div class="book-operation">

                <router-link :to="{name:'detail',params:{id:item.id}}" >详情</router-link>
                <a @click="cancelIt(item.id)">取消收藏</a>
              </div>
            </div>


          </li>
        </ul>
      </div>
    </div>

</template>
<script>
  import {mapState,mapMutations,mapGetters} from 'vuex'
    import Mheader from '../base/header';
  import * as Types from '../vuex/mutations-types.js'
    export default {

        created(){
        },
        methods: {
          ...mapMutations([Types.REMOVE_COLLECT]),
          cancelIt(which){
              this[Types.REMOVE_COLLECT](which)
          }
        },
        computed: {
          ...mapState(['favors'])
          //...mapGetters(['price'])
        },
        components: {
            Mheader
        }

    }
</script>
<style scoped lang="less">
  li{
    display: flex;
  img{
    width:100px;
    height:120px;
  }
  div{
    display: flex;
    flex-direction: column;
  div{
    display: flex;
    flex-direction: row;
  a{
    padding:5px;
  }
  }

  }
  }
</style>
