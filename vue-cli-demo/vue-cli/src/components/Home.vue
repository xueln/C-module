<template>
    <div>
        <Mheader>首页</Mheader>
        <div class="content">
          <Swiper :swiperSlides="sliders"></Swiper>
          <Loading :loading="isLoading" :data="!books.length&& !isLoading"></Loading>
          <template v-if="books.length&& !isLoading">
            <h3>热门图书</h3>
            <ul class="hot" >
              <li v-for="item in books" class="book-item">
                <img v-lazy="item.bookCover" alt="图书" class="book-img"/>
                <span  class="book-intro">{{item.bookName}}</span>
                <span  class="book-intro"> ￥{{item.bookPrice}}</span>

              </li>
            </ul>
          </template>

        </div>
    </div>

</template>
<script>
  import Mheader from '../base/header';
  import Swiper from '../base/swiper';
  import axios from  'axios';
  import Loading from '../base/loading'
    export default {
        data(){
            return {
                sliders:[

                ],
                books:[],
                isLoading:true

            }
        },
        created(){
            this.getSliders();
            setTimeout(()=>{
              this.getBooks();
            },1000)

        },

        methods: {
            getSliders(){
              axios.get('/api/sliders').then((res)=>{
                this.sliders=res.data;
              })
            },
            getBooks(){
              axios.get('/api/hot').then(res=>{
                  console.log(res.data)
                  this.books=res.data;
                  this.isLoading=false;

              })
            }
        },
        computed: {},
        components: {
            Mheader,
            Swiper,
            Loading
        }

    }
</script>
<style scoped lang="less">
  h3{
    height:30px;
    line-height: 30px;
    font-size: 18px;
    text-align: center;
  }
  .hot{
    display: flex;
    flex-wrap:wrap;

    .book-item{
      text-align: center;
      width: 33.3%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding:5px;
      box-sizing: border-box;

    }
    .book-img{
      height:100px;
    }
    .book-intro{
      font-size: 14px;
      color:#666666;
    }
  }

</style>
