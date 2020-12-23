<template>
  <div id="page" class="container">
    <div class="loading">
      <v-progress-circular
        indeterminate
        color="primary"
      ></v-progress-circular>
    </div>
    
    <div id="header">
      <div id="logo">
        <img src="images/pic02.jpg" alt="" />
        <h1><a href="#">Privy</a></h1>
        <span>Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a></span>
      </div>
      <div id="menu">
        <ul>
          <li class="current_page_item"><a href="#" accesskey="1" title="">Homepage</a></li>
          <li><a href="#" accesskey="2" title="">Our Clients</a></li>
          <li><a href="#" accesskey="3" title="">About Us</a></li>
          <li><a href="#" accesskey="4" title="">Careers</a></li>
          <li><a href="#" accesskey="5" title="">Contact Us</a></li>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<style scoped>
  @keyframes fadein {
    0% {opacity: 1;}
    100% {
      opacity: 0;
      display: none;
      z-index: -10;
    }
  }
  .loading{
    background-color: #fff;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 10;
    left: 0;
    text-align: center;
    line-height: 50;
  }
  .close{
    animation: fadein 2s both;
  }
</style>

<script>

export default {

}
</script>