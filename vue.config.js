module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath:process.env.NODE_ENV === 'production'
    ? '/personal/'
    : '/',
  indexPath:'../../resources/views/front.blade.php',
  outputDir:'../admin/public/personal',
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