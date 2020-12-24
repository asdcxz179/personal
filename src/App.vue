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
        <img 
          :src="$root.avatar"
          alt="" />
        <h1><a href="#" >{{$root.personal_name}}</a></h1>
      </div>
      <div id="menu">
        <ul>
          <router-link
              to="/"
              v-slot="{ href,isExactActive }"
            >
            <li :class="[isExactActive && 'current_page_item']">
              <a :href="href" >首頁</a>
            </li>
          </router-link>
          <router-link
              to="/Work"
              v-slot="{ href,isExactActive }"
            >
            <li :class="[isExactActive && 'current_page_item']">
              <a :href="href" >作品專區</a>
            </li>
          </router-link>
          <router-link
              to="/Contact"
              v-slot="{ href,isExactActive }"
            >
            <li :class="[isExactActive && 'current_page_item']">
              <a :href="href" >聯絡我</a>
            </li>
          </router-link>
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
  #logo img{
    width:80px;
    height:80px;
  }
</style>

<script>

export default {

}
</script>