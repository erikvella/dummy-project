<script>
export default{
  name : 'Section1',
}
</script>

<template>

  <div class="section-1 d-flex">
    <div class="container">
      <div class="row d-flex">
        <div class="col-sm-12 col-xl-6 s1-sx">
          <h6>Category</h6>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed diam nonumy eirmod tempor invidunt ut labore.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam totam fugiat laudantium atque porro voluptatum dolores architecto quasi. Doloribus nesciunt laboriosam voluptatem soluta, minima accusantium quia saepe obcaecati cum quod.</p>
          <div class="read-more-box">
              <span class="read-more">Read more</span>
          </div>
        </div>
        <div class="col-sm-12 col-xl-6 s1-dx">
          <img src="/public/Field.jpg" alt="Campo">
        </div>
      </div>
    </div>
  </div>
 
</template>

<style lang="scss" scoped>
.debug{
  border: 1px solid red;
}
.section-1{
  width: 100%;
  height: 700px;
  .container{
    height: 80%;
    width: 80%;
    align-self: center;
    .read-more-box{
     margin-top: 50px;
      .read-more{
        padding: 10px 20px;
        background-color: rgb(3, 155, 161);
        border-radius: 20px;
        &:hover{
          background-color: rgb(24, 24, 24);
          color: rgb(242, 242, 242);
        }
      }
    }
    h3{
      color: rgb(3, 155, 161);
    }
  }
}
.row{
  height: 100%;
  .s1-sx{
    height: 50%;
    p{
      color: rgb(105, 105, 105);
    }
  }
  .s1-dx{
    height: 50%;
    img{
      width: 100%;
      height: 100%;
    }
  }
}

@media screen and (min-width: 1200px){
  .section-1{
    width: 100%;
    height: 600px;
  }
  .row{
  height: 100%;
  .s1-sx{
    height: 100%;
    h6{
      margin-top: 60px;
    }
    h3{
      margin-top: 30px;
      margin-right: 40px;
    }
    p{
      margin-top: 30px;
      margin-right: 40px;
    }
  }
  .s1-dx{
    height: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
}
</style>
