<template>
  <div id="page" class="container">
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