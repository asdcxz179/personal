import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import router from './router'
import axios from 'axios'
import common from './common/index'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueI18n from 'vue-i18n'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies);
Vue.use(VueSweetalert2);
Vue.use(VueI18n);
Vue.config.productionTip = false
Vue.prototype.$common = common;
Vue.prototype.$axios = axios;

const i18n = new VueI18n();

axios.interceptors.response.use(response=>{ 
	return response
},error=>{
	return error.response
});

new Vue({
  vuetify,
  store,
  router,
  axios,
  i18n,
  render: h => h(App),
  data: () => ({
    i18n_trans:{
      'zhHant':'zh_TW',
      'zhHans':'zh_CN'
    },
    title:"",
    ico:"",
    avatar:"http://localhost:8081/images/pic02.jpg",
    personal_name:"Privy",
    webs:{
		home_page:{
			page_content:""
		},
		work_page:{
			page_content:""
		},
		contact_page:{
			page_content:""
		},
	},
    works:[],
  }),
  created:function(){
    this.Init();
    var lang = this.$cookies.get('lang');
    if(lang){
      this.$store.commit('setLanguage',lang);
    }
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
      await this.GetExperience();
      await this.GetWebContent();
      await document.querySelector('.loading').classList.add('close');
    },
    setLang(lang){
      this.$store.commit('setLanguage',lang);
      this.loadLanguageAsync();
    },
    loadLanguageAsync:function(){
      return import(`./lang/${this.$store.state.language}.json`).then(msgs => {
        this.$i18n.setLocaleMessage(this.$store.state.language, msgs.default);
        this.$common.i18n.setLocaleMessage(this.$store.state.language, msgs.default);
        this.setI18nLanguage();
        return true;
      });
    },
    setI18nLanguage:function(){
      this.$i18n.locale = this.$store.state.language;
      this.$common.i18n.locale = this.$store.state.language;
      this.$vuetify.lang  = {t: (key, ...params) => this.$i18n.t(key, params)};
      this.$cookies.set('lang',this.$i18n.locale);
      document.querySelector('html').setAttribute('lang', this.$i18n.locale);
      return this.$i18n.locale;
    },
    GetWebInfo(){
      this.$axios.get('/WebInfo').then((res)=>{
        this.title  = res.data.data.web_name;
        this.ico  = res.data.data.web_ico;
        this.avatar  = res.data.data.avatar;
        this.personal_name 	= res.data.data.personal_name;
      });
    },
    GetExperience(){
      this.$axios.get('/Experience').then((res)=>{
      this.works 	=	res.data.data
      });
    },
    GetWebContent(){
      this.$axios.get('/WebContent').then((res)=>{
      this.webs 	=	res.data.data
      });
    },
  },
  mounted:function(){
    var lang = this.$cookies.get('lang');
    if(lang){
      this.$store.commit('setLanguage',lang);
    }
    this.loadLanguageAsync();
  }
}).$mount('#app')
