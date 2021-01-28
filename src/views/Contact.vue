<template>
	<div id="main">
		<!-- <div id="welcome" v-html="$root.webs.contact_page.page_content">
		</div> -->
		<ValidationObserver ref="ContactForm" >
            <v-form ref="contact_form" @submit="SendContact()">
				<v-card>
					<v-card-text>
						<ValidationProvider v-slot="{ errors }" name="主旨" rules="required">
							<v-text-field
								v-model="form.contact_title"
								label="主旨" 
								:error-messages="errors"
							></v-text-field>
						</ValidationProvider>
						<ValidationProvider v-slot="{ errors }" name="姓名" rules="required">
							<v-text-field
								v-model="form.contact_name"
								label="姓名" 
								:error-messages="errors"
							></v-text-field>
						</ValidationProvider>
						<ValidationProvider v-slot="{ errors }" name="電子郵件" rules="required|email">
							<v-text-field
								v-model="form.contact_email"
								label="電子郵件" 
								:error-messages="errors"
							></v-text-field>
						</ValidationProvider>
						<ValidationProvider v-slot="{ errors }" name="內容" rules="required">
							<v-textarea
								v-model="form.contact_content"
								label="內容" 
								:error-messages="errors"
							></v-textarea>
						</ValidationProvider>
					</v-card-text>
					<v-card-actions>
						<v-btn color="blue darken-1" text type="submit">送出</v-btn>
					</v-card-actions>
				</v-card>
            </v-form>
          </ValidationObserver>
	</div>
</template>

<script>
// @ is an alias to /src
import { required, email, max, min, alpha,alpha_num } from 'vee-validate/dist/rules'
import { extend,ValidationObserver, ValidationProvider } from 'vee-validate'
import { localize } from 'vee-validate';
import TW from 'vee-validate/dist/locale/zh_TW.json';
extend('required',required);
extend('email',email);
extend('max',max);
extend('min',min);
extend('alpha',alpha);
extend('alpha_num',alpha_num);
localize('zh_TW', TW);
export default {
	components:{
		ValidationObserver,
		ValidationProvider
	},
	data: () => ({
		form:{
			contact_title:"",
			contact_name:"",
			contact_email:"",
			contact_content:"",
			_token:"",
		},
	}),
	methods:{
		GetToken(){
			this.$axios.get('/Token').then((res)=>{
				this.form._token 	=	res.data;
			})
		},
		SendContact(){
			this.$refs.ContactForm.validate().then(result => {
				if(result){
					this.$axios.post('/Contact',this.form).then((res)=>{
						if(res.data.status=='success'){
							this.$common.AxiosHandle(res);
							this.$refs.contact_form.reset();
							this.GetToken();
						}
					})
				}
			})
		}
	},
	created:function(){
		this.GetToken();
	}
}
</script>
