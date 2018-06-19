<template>
  <div>
    <Navheader title="详情页" back="true"></Navheader>
    <div class="content">
      <ul>
        <li>
          <span>书名</span>
          <input type="text" v-model="book.bookName">
        </li>
        <li>
          <span>封面</span>
          <input type="text" v-model="book.bookCover">
        </li>
        <li>
          <span>详情</span>
          <input type="text" v-model="book.bookInfo">
        </li>
        <li>
          <span>价格</span>
          <input type="number" v-model="book.bookPrice">
        </li>
      </ul>
      <button @click="modify(book.id)" class="bigBtn">修改</button>
    </div>
    <Tab></Tab>
  </div>

</template>
<script>
  import Navheader from '../base/nav'
  import Tab from '../base/tab'
  import axios from 'axios'

  export default {
    data(){
      return {book:{
        "bookName":"",
        "bookCover":"",
        "bookPrice":"",
        "bookInfo":"",
        "id":''
      }}
    },
//    watch:{
//        $route(){
//          this.getDetail();
//       }
//    },
    created(){
    },
    activated(){
        this.book.id=this.$route.params.id;
        this.getDetail();

    },
    methods: {
      getDetail(){
          axios.get('/book?id='+this.book.id).then(res=>{
            this.book=res.data;
          })
      },
      modify(){
          axios.put('/book',this.book).then(res=>{
              this.$router.push('/list')
          })
      }
    },
    computed: {},
    components: {
      Navheader,
      Tab
    }

  }
</script>
<style scoped lang="less">
  ul{
    padding:20px;
  input{

    width:85%;
    vertical-align: top;
    height:20px;

  }
  span{

  }
  li{
    margin-bottom:10px;
  }
  }
</style>
