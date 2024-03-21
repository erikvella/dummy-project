<script>
import { store } from '../../assets/data/store';
export default{
  components:{
    store
  },
  name : 'Section2',
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <div class="section-2 d-flex">
    <div class="container">
      <div class="row d-flex">
        <div class="col-sm-12 col-xl-9 s2-sx">
          <h3 class="green-text">Latest from the blog</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, tempore commodi quas omnis libero molestiae, ea cumque necessitatibus dicta perferendis ipsa! Quam doloremque quasi fugit dolor, quos facilis laudantium voluptatibus corrupti debitis numquam consequuntur! Ratione, eius.</p>
      
        </div>
        <div class="col-sm-12 col-xl-12 s2-dx d-flex justify-content-between">
                                     <!-- ciclo i post rendendoli dinamici -->
            <div v-for="post in store.posts" :key="post.id" class="post">
              <div class="img-box">
                <img :src="`${post.image}`" alt="">
              </div>

              <div class="m-xl-3">
                <span class="green-text d-sm-block d-xl-inline">Category</span>
                <span class="grey-text">/ {{post.date}}</span>
                <h4 class="my-3">{{post.title}}</h4>
                <div class="animation-box d-inline-block">
                  <div class="green-bg d-inline-block left-line"></div> 
                  <span>Read more</span> 
                  <div class="green-bg d-inline-block right-line"></div>
                </div>
              </div>
            </div>
                   <!-- fine della parte del post -->
        </div>
      </div>
    </div>
  </div>
 
</template>

<style lang="scss" scoped>
.debug{
  border: 1px solid red;
}
.section-2{
  margin-top: 20px;
  width: 100%;
  height: 700px;
  background-color: rgb(228, 228, 228);
  .container{
    height: 90%;
    align-self: center;
  }
}
.row{
  height: 100%;
  .s2-sx{
    height:30%;
    p{
      color: rgb(105, 105, 105);
    }
  }
  .s2-dx{
    height: 70%;
      .post{
        width: 33%;
        height: 90%;
        background-color: white;
        .img-box{
          width: 100%;
          img{
            width: 100%;
          }
        }
        span, h4{
          margin-left: 10px;
        }
      
      }
  }
}
// aggiungo la transizione per animare le due "line"
.left-line , .right-line{
  transition: all 0.5s ease;
}
.animation-box{
  .left-line{
   height: 0px;
   width: 0px;
  }
  .right-line{
    height: 2px;
    width: 40px;
    margin-left: 15px;
  }
  &:hover{
    .left-line{
      height: 2px;
      width: 40px;
      margin-right: 5px;
      margin-left: 10px;
    }
    .right-line{
      height: 0px;
      width: 0px;
    }
  }
}




@media screen and (min-width: 1200px){
  .container{
    width: 80%;
  }
  .row{
  height: 100%;
  .s2-sx{
    height:30%;
  }
  .s2-dx{
    height: 70%;

      .post{
        width: 30%;
        height: 90%;
        background-color: white;
        img{
          width: 100%;
        }
        span, h4{
          margin-bottom: 20px;
        }
      }
  }
}

}
</style>
