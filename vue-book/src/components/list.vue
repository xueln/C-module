<template>
  <div>
    <Navheader title="列表页" back="true"></Navheader>
    <div class="content">
      <template>
        <div v-if="isLoaded && hasData">
          <div class="filter">
            <p style="margin-bottom: 10px;margin-top: 10px;"><button @click="sort" style="background: #ffde5a;color:#999999">按价格排序</button></p>
            <template v-if="false">
              <input v-show="false" type="text" v-model="keyword" @enter="search"/>
              <select v-model="by" v-show="false">
                <option value="" disabled>请选择</option>
                <option value="bookName">书名</option>
                <option value="bookInfo">详情</option>
              </select>
              {{keyword}}{{by}}
            </template>

          </div>
          <div>
            <ul>
              <li v-for="item in books">

                <img v-lazy="item.bookCover"/>

                <div class="word">
                  <p><span>《</span><span v-html="item.bookName"></span><span>》</span></p>
                  <p v-html="item.bookInfo"></p>
                  <p><span>￥</span><span v-html="item.bookPrice"></span></p>
                  <p>
                    <router-link :to="{name:'detail',params:{id:item.id}}" tag="button">详情</router-link>
                    <button @click="remove(item.id)">删除</button>
                    <button @click="addCollect(item)">收藏</button>
                  </p>
                </div>

              </li>
            </ul>
          </div>
        </div>
        <Load :isLoaded="isLoaded" :hasData="hasData" v-else></Load>
      </template>


    </div>
    <Tab></Tab>
  </div>

</template>
<script>
  import Navheader from '../base/nav'
  import Tab from '../base/tab'
  import Load from '../base/load'
  import axios from 'axios'

  import {mapMutations} from 'vuex'
  import * as Types from '../vuex/mutations-type'

  export default {
    data(){
      return {
          books:[],
          isLoaded:false,
          hasData:false,
          sign:1
      }
    },
    activated(){
      this.getBooks()
    },
    created(){

    },
    methods: {
      ...mapMutations([Types.ADD_COLLECT]),
      addCollect(item){
          this[Types.ADD_COLLECT](item);

          this.$router.push('/collect')
      },
      getBooks(){
        axios.get('/book').then( res=>{
          this.isLoaded=true;
          this.hasData=res.data?true:false;
          this.books=res.data;
        })
      },
      sort(){
        this.sign*=-1;
        this.books=this.books.sort((a,b)=>this.sign*(parseInt(a.bookPrice)-parseInt(b.bookPrice)))
      },
      remove(id){
          this.books=this.books.filter(item=>item.id!=id);

          axios.delete('/book?id='+id).then(res=>{

          })
      }
    },
    computed: {},
    components: {
      Navheader,
      Tab,
      Load
    }

  }
</script>
<style scoped lang="less">
  li{
    display:flex;
    img{
      width:200px;
      height:200px;
    }
    border-bottom:1px dotted grey;
  }
  .word{
    padding:5px;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
  }

</style>
