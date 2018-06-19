<template>
  <div>
    <Mheader :back="true">修改</Mheader>
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
      <div>
        <button @click="update">修改</button>
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

      }}
    },
    watch:{
        $route(){
            this.getDetail();
       }
    },
    created(){
        this.getDetail();
    },
    methods: {
        getDetail(){
          axios.get('/api/book?id='+this.$route.params.id).then(res=>{
            if(res.data.err){
              this.$router.push('/list');
            }else{
              console.log(res.data)
              this.book=res.data.newData;
            }

          })
        },
      update(){

        axios.put('/api/book?id='+this.book.id,this.book).then(res=>{
          this.$router.push('/list')
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
