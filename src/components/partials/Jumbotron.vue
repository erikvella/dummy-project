<script>

export default{

  name : 'Jumbotron',
}
</script>

<template>
<main>
  <!-- sezione del jumbotron -->
  <div class="container-fluid jumbotron d-flex">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-xl-6">
          <p>Category</p>
          <h1>Lorem ipsum dolor sit amet, consectetur</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos architecto necessitatibus aliquid, itaque numquam ducimus voluptatum velit non ipsa culpa, nemo atque possimus distinctio dignissimos, ipsam maiores laudantium a fuga?</p>
          <div class="read-more-box">
              <span class="read-more">Read more</span>
          </div>
        </div>
      </div>
     
    </div>
  </div>
  <!-- fine jumbotron -->

</main>
</template>

<style lang="scss" scoped>
.debug{
border: 1px solid rgb(207, 6, 153);
}
.jumbotron{
  height: 400px;
  background-image: url('/public/Paesaggio.jpg');
  background-size: cover;
  background-position: center;
  color: rgb(240, 239, 239);
  .container{
    height: 80%;
    width: 80%;
    align-self: flex-end;
    .read-more{
      padding: 10px 20px;
      background-color: rgb(3, 155, 161);
      border-radius: 20px;
      &:hover{
        background-color: rgb(245, 245, 245);
        color: black;
      }
    }
  }
}


@media screen and (min-width:1200px) {
  .jumbotron{
  height: 700px;
  background-image: url('/public/Paesaggio.jpg');
  background-size: cover;
  background-position: center;
  color: rgb(240, 239, 239);
  .container{
    height: 60%;
    width:80%;
    align-self: flex-end;
    justify-self: flex-start;
    .read-more-box{
      margin-top: 40px;
      .read-more{
        padding: 10px 20px;
        background-color: rgb(3, 155, 161);
        border-radius: 20px;
        &:hover{
        background-color: rgb(245, 245, 245);
        color: black;
      }
      }
    }
  }
}
}
</style>
