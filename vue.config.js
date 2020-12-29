module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath:process.env.NODE_ENV === 'production'
    ? '/personal/'
    : '/',
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