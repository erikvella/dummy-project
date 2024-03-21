<script>
export default{
  name : 'Section3',
}
</script>

<template>
<div class="container-fluid">
  <div class="row">
    <!-- inizio del box con immagine -->
    <div class="col-sm-12 col-xl-6">
      <img src="/public/Field.jpg" alt="">
    </div>

    <!-- inizio del box con testo -->
    <div class="col-sm-12 col-xl-6 green-bg d-flex">
      <div class=" container d-flex flex-column justify-content-around">
        <span class="d-block">On focus</span>
        <h3>Lorem ipsum dolor sit amet, consetetur sadipscing eltr, sed.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aut quam provident, ipsum officiis libero. Harum quo voluptates earum, necessitatibus accusantium similique libero.</p>
        <div class="read-more-box">
              <span class="read-more">Read more</span>
        </div>
      </div>
    </div>
  </div>
</div> 
</template>

<style lang="scss" scoped>
.debug{
  border: 1px solid red; 
}
.col-sm-12{
  height: 400px;
  padding: 0;
  img{
    width: 100%;
    height: 100%;
  }
  .container{
    color: rgb(255, 255, 255);
    height: 70%;
    width: 85%;
    padding-right:40px;
    align-self: center;
    .read-more{
      padding: 10px 20px;
      background-color: rgb(0, 0, 0);
      color: white;
      border-radius: 20px;
      &:hover{
        background-color: rgb(245, 245, 245);
        color: rgb(3, 155, 161);
      }
    }
  }
}
</style>
