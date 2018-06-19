<template>
    <div>
        <Navheader title="首页"></Navheader>
        <div class="content">
          <div class="box">
            <swiper :options="swiperOption">
              <swiper-slide v-for="slide in swiperSlides">
                <img :src="slide">
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <template>

            <div v-if="isLoaded && hasData">

              <h4>热门图书</h4>
              <div>
                <ul>
                  <li v-for="item in hots">

                      <img v-lazy="item.bookCover"/>

                    <p><span>《</span><span v-html="item.bookName"></span><span>》</span></p>
                    <p><span>￥</span><span v-html="item.bookPrice"></span></p>
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
    require('swiper/dist/css/swiper.css')
    import axios from 'axios'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        data(){
            return {
              swiperOption: {
                autoplay: 2000,
                setWrapperSize :true,
                pagination : '.swiper-pagination',
                paginationClickable :true,
                mousewheelControl : true,
                observeParents:true,
                autoplayDisableOnInteraction:false
              },
              swiperSlides:require('../../mock/sliders.js'),
              hots:[],
              isLoaded:false,
              hasData:false

            }
        },
        activated(){
          this.getHot();
        },
        created(){

        },
        methods: {
            getHot(){
                axios.get('/book').then( res=>{

                    this.isLoaded=true;
                    this.hots=res.data.reverse().slice(0,9);
                    this.hasData=this.hots?true:false;


                })
            }
        },
        computed: {},
        components: {
          Navheader,
          Tab,
          swiper,
          swiperSlide,
          Load
        }

    }
</script>
<style scoped lang="less">
  h4{
    font-size: 20px;
    text-align: center;
    border-bottom: 1px dashed grey;
    line-height: 30px;
    color:#ee4b47;
  }
  p{
    text-align: center;
  }
  .box{
    height:40%;

  }
  .box>div{
    height:100%;
  }
  img{
    width:100%;
    height:100%;
  }
  ul{
    display: flex;
    flex-wrap:wrap;
    li{
      width:33.3%;
      img{
        width:100%;
        height:150px;
      }
      padding:10px;
      box-sizing:border-box;
    }

  }
</style>
