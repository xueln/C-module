<template>
    <div>
      <Mheader :back="true">列表页</Mheader>
      <div class="content">
        <Loading :loading="isLoading" :data="!books.length&& !isLoading"></Loading>
        <template v-if="books.length&& !isLoading">
          <div class="filter">
            <p><button @click="sort">按价格排序</button></p>
            <template v-show="false">
              <input v-show="false" type="text" v-model="keyword" @enter="search"/>
              <select v-model="by" v-show="false">
                <option value="" disabled>请选择</option>
                <option value="bookName">书名</option>
                <option value="bookInfo">详情</option>
              </select>
              {{keyword}}{{by}}
            </template>

          </div>
          <ul class="hot">
            <li v-for="item in books" class="book-item">
              <img v-lazy="item.bookCover" alt="图书" class="book-img"/>
              <div class="book-detail">
                <p  class="book-intro" v-html="item.bookName"></p>
                <p  class="book-intro" v-html="item.bookInfo"></p>
                <p  class="book-intro"> ￥{{item.bookPrice}}</p>
                <div class="book-operation">

                  <router-link :to="{name:'detail',params:{id:item.id}}" >详情</router-link>
                  <a @click="remove(item.id)">删除</a>
                  <a @click="addIt(item)">收藏</a>
                </div>
              </div>


            </li>
          </ul>
        </template>
      </div>
    </div>

</template>
<script>
    import Mheader from '../base/header';
    import axios from 'axios';
    import Loading from '../base/loading'
    import { mapMutations } from 'vuex';
    import * as Types from '../vuex/mutations-types.js';


    export default {
        data(){
            return {
              books: [],
              isLoading:true,
              sign:1,
              keyword:'',
              by:''
            }
        },
        created(){


        },
        activated(){
          this.getBooks();
        },
        methods: {
          search(){
              let word=this.keyword;
              let reg=new RegExp(word,'g')
            if(!this.by){

//              this.books.map(item=>{
//
//                for(let i in item){
//                    item[i].replace(reg,(str)=>{
//                    return '<span class="color:red;background:yellow">'+str+'</span>'
//                  })
//                }
//
//              })
            }else{
              this.books.map(item=>{
                  if(reg.test(item[this.by])){
                    item[this.by]=item[this.by].replace(reg,(str)=>{
                      return '<span class="color:red;background:yellow">'+str+'</span>'
                    })

                    return item;
                  }else{
                    return item;
                  }


              })
            }

          },
          sort(){
              this.sign*=-1;
            this.books=this.books.sort((a,b)=>this.sign*(parseInt(a.bookPrice)-parseInt(b.bookPrice)))
          },
          ...mapMutations([Types.ADD_COLLECT]),
          addIt(item){
            this[Types.ADD_COLLECT](item);
            this.$router.push('/collect');
        },
            getBooks(){
                axios.get('/api/book').then( res => {
                    this.books=res.data;
                    this.isLoading=false;

                })
            },
            remove(id){
                  axios.delete('api/book?id='+id).then(res=>{
                      this.books=this.books.filter(item=>item.id!=id);
                  })
            }
        },
        computed: {},
        components: {
            Mheader,
          Loading
        }

    }
</script>
<style scoped lang="less">
  .filter{
    p{
      text-align: right;
    }
  }
  button{
    margin-bottom: 20px;
  }
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
