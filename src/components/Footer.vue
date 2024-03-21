<script>
export default{
  name : 'Footer',
}
</script>

<template>
 <footer>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-xl-3">
        <div class="logo d-flex">
           <i class="fa-sharp fa-solid fa-fan"></i>
           <span class="title"><strong>Nature</strong> Agency</span>
        </div>
        <p class="d-sm-none d-xl-block my-4 grey-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi est dicta quas saepe, ipsum enim!</p>
      </div>
      <!-- inizio della parte destra del footer -->
      <div class="col-sm-12 col-xl-7 d-flex justify-content-between">
        <div>
          <h5 class="green-text">Lorem ipsum</h5>
          <ul class="list-unstyled">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div>
          <h5 class="green-text">Lorem ipsum</h5>
          <ul class="list-unstyled">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div>
          <h5 class="green-text">Lorem ipsum</h5>
          <ul class="list-unstyled">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div>
          <h5 class="green-text">Lorem ipsum</h5>
          <ul class="list-unstyled">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <!-- fine della parte destra del footer -->
      </div>
      <div class="col-12">
        <ul class="d-flex list-unstyled">
          <li class="social-icon"><i class="fa-brands fa-facebook green-text"></i></li>
          <li class="social-icon"><i class="fa-brands fa-instagram green-text"></i></li>
          <li class="social-icon"><i class="fa-brands fa-linkedin green-text"></i></li>
        </ul>
      </div>
    </div>
  </div>
 </footer>
</template>

<style lang="scss" scoped>
.debug{
  border: 1px solid yellow;
}
.debug2{
  border: 1px solid rgb(255, 30, 229);
}
footer{
  background-color: rgb(30, 30, 30);
  color: white;
  height: 300px;
  display: flex;
  .container{
    align-self: center;
  }
}

.logo{
  .fa-fan{
    font-size: 3rem;
    color:  rgb(3, 155, 161);
  }
}
.title{
  font-size: 1.5rem;
  margin-left: 10px;
}
.fa-brands{
  font-size: 2rem;
}
.social-icon{
  margin-right: 16px;
}

</style>
