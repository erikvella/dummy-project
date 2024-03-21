<script>
export default{
  name : 'Header',
}
</script>

<template>
 <header>
<div class="container-fluid">
  <div class="row d-flex h-max">
    <!-- parte sinistra dell'header -->
    <div class="col-sm-2 h-max col-xl-6 d-flex">
      <div class="logo">
        <i class="fa-sharp fa-solid fa-fan"></i>
      </div>
      <span class="title d-sm-none d-xl-block"><strong>Nature</strong> Agency</span>
    </div>

    <!-- parte destra dell'header -->
   <div class="col-sm-10 col-xl-6 h-max">
    <nav>
      <ul class="d-flex list-unstyled justify-content-sm-around justify-content-xl-between ">
        <li class=" my-4 ">Who we are</li>
        <li class=" my-4 ">Services</li>
        <li class=" my-4 ">Products</li>
        <li class=" my-4 ">Blog</li>
        <li class=" my-4 "><i class="fa-solid fa-magnifying-glass"></i></li>
        <li class="contact-us my-3">Contact us</li>
      </ul>
    </nav>
    
   </div>

  </div>
</div>

 </header>
</template>

<style lang="scss" scoped>
// mobile size sm 576px
// desktop size xl 1200px
.debug{
border: 1px solid rgb(207, 6, 153);
}

.container-fluid{
  height: 80px;
}

.logo{
  margin-left: 15px;
  align-self: center;
  .fa-fan{
    font-size: 3rem;
    color:  rgb(3, 155, 161);
  }
}
.title{
  font-size: 1.5rem;
  align-self: center;
  margin-left: 10px;
}
.fa-magnifying-glass{
  font-size: 1.2rem;
}
.contact-us{
  padding: 10px 20px;
  background-color: rgb(3, 155, 161);
  color: white;
  border-radius: 20px;
  &:hover{
    background-color: rgb(30, 30, 30);
  }
}

@media screen and (min-width:1200px) {
  .logo{
  margin-left: 100px;
  .title{
  font-size: 1.1rem;
  align-self: center;
  margin-left: 10px;
}
}
nav{
  margin-right: 100px;
}
}
</style>
