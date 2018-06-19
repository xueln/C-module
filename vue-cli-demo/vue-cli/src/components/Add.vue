<script src="../../../../vue-book/src/main.js"></script>
<template>
    <div>
      <Mheader :back="true">添加页</Mheader>
      <div class="content">
        <div>
          <label>书名</label>
          <input type="text" v-model="book.bookName">
        </div>
        <div>
          <label>封面</label>
          <input type="text" v-model="book.bookCover">
        </div>
        <div>
          <label>详情</label>
          <input type="text" v-model="book.bookInfo">
        </div>
        <div>
          <label>价格</label>
          <input type="text" v-model="book.bookPrice">
        </div>
        <div style="text-align: center">
          <button @click="add">添加</button>
        </div>
      </div>

    </div>

</template>
<script>
   import Mheader from '../base/header'
   import axios from  'axios';
    export default {
        data(){
            return {msg: 'add',book:{
                bookName:'',
                bookPrice:'',
                bookCover:'',
                bookInfo:''
            }}
        },
        created(){
        },
        methods: {
            add(){
                axios.post('api/book',this.book).then(res=>{
                    this.$router.push('/list');
                })
            }
        },
        computed: {},
        components: {
            Mheader
        }

    }
</script>
<style scoped lang="less">
  button{
    width:60px;
    height:30px;
    line-height: 30px;
    font-size: 14px;
  }
  .content div{
    width: 90%;
    margin: 20px auto;
    height:30px;
  label{float: left}
  input{
    margin-left: 15%;
    display: block;
    width: 80%;
  }
  }
</style>
