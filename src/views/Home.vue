<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div class="single-blog" v-for="blog in filterBlogs">
   <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      <article>{{blog.body | snippet}}</article>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        blogs:[],
        search:''
      }
    },
    created(){
      this.axios.get(`http://jsonplaceholder.typicode.com/posts`).then(res=>{
        console.log(res);
        this.blogs =res.data.slice(0,10)
      })
    },
    computed:{
      filterBlogs:function () {
        return this.blogs.filter((blog)=>{
          return blog.body.match(this.search);


        })

      }
    },
    filters:{

        'to-uppercase':function (value) {
          return value.toUpperCase()
        }



    },
    directives:{
      "rainbow":{
        bind(el,binding,vnode){
          el.style.color="#"+Math.random().toString(16).slice(2,8)
        }
      }

    }


  }


</script>
<style>
  #show-blogs{
    max-width: 800px;
    margin: 0 auto;
  }
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background-color: #eee;
  }

</style>
