import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
axios.interceptors.response.use(response=>{ 
	return response.data
},error=>{
	return error.response
});

new Vue({
  vuetify,
  store,
  router,
  axios,
  render: h => h(App),
  data: () => ({
    title:"",
    ico:"",
    avatar:"http://localhost:8081/images/pic02.jpg",
    personal_name:"Privy",
    webs:[],
    works:[],
  }),
  created:function(){
    this.Init();
  },
  watch:{
    title:function(){
      document.title  = this.title;
    },
    ico:function(){
      document.querySelector('link[rel=icon]').href  = this.ico;
    }
  },
  methods:{
    async Init(){
      await this.GetWebInfo();
      await document.querySelector('.loading').classList.add('close');
      await this.GetExperience();
      await this.GetWebContent();
    },
    GetWebInfo(){
      this.$axios.get('/WebInfo').then((res)=>{
        this.title  = res.data.web_name;
        this.ico  = res.data.web_ico;
        this.avatar  = res.data.avatar;
        this.personal_name 	= res.data.personal_name;
      });
    },
    GetExperience(){
      this.$axios.get('/Experience').then((res)=>{
		this.works 	=	res.data
      });
    },
    GetWebContent(){
      this.$axios.get('/WebContent').then((res)=>{
		this.webs 	=	res.data
      });
    },
  },
}).$mount('#app')
