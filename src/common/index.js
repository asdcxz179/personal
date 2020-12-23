
import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueI18n from 'vue-i18n'

Vue.use(VueSweetalert2)

const common = {};

common.i18n = new VueI18n();

common.AxiosHandle = function (data){
	var swal_settings 	=	{
		heightAuto:false,
	};
	switch(data.status){
		case 200:
			swal_settings.title 	=	this.i18n.t('common').success;
			swal_settings.icon 		=	'success';
			swal_settings.html 		=	data.data.message;
		break;
		case 401:
			swal_settings.icon 		=	data.data.status;
			swal_settings.html 		=	data.data.message;
		break;
		case 422:
			swal_settings.title 	=	this.i18n.t('common').warning;
			swal_settings.icon 		=	'warning';
			swal_settings.html 		=	data.data.message;
		break;
		case 500:
			swal_settings.title 	=	this.i18n.t('common').error;
			swal_settings.icon 		=	'error';
			swal_settings.html 		=	this.i18n.t('common.system-error');
		break;
		default:
			swal_settings.title 	=	this.i18n.t('common').error;
			swal_settings.icon 		=	'error';
			swal_settings.html 		=	this.i18n.t('common.undefind-error')+':'+data.status;
		break;
	}
	Vue.swal(swal_settings);
}

common.DataNoHandle = function(datas,page,limit){
	var no = ((page-1)*limit)+1;
	for(var data in datas){
		datas[data]['no']	=	no;
		no++;
	}
	return datas;
}

common.SortHandle = function(options){
	let extend  = '';
    if(options.sortBy.length>0){
      let sort  = 'asc';
      if(options.sortDesc[0]){
        sort = 'desc';
      }
      extend+='&orderby='+options.sortBy[0]+'&sort='+sort;
    }
    return extend;
}

export default common