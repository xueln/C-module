<template>
  <div>
    <Navheader title="添加页" back="true"></Navheader>
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
      <button @click="add" class="bigBtn">添加</button>
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
      return {
          book:{
        "bookName":"",
        "bookCover":"",
        "bookPrice":"",
        "bookInfo":""
      }}
    },
    created(){
    },
    methods: {
        add(){
            axios.post('/book',this.book).then(res=>{
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
