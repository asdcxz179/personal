module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer:{
  	proxy:{
  		'/':{
  			target:'http://localhost/',
  			changOrigin:true,
  			pathRewrite : {
                '^/api' : ''
            }
  		}
  	}
  }
}