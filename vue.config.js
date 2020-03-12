module.exports = {
  "transpileDependencies": [
    "vuetify",
  ],
 lintOnSave: false,
  devServer: {
	open: true,
	host: 'localhost',
	port: 8078,
	proxy: {
	  '/api': {
		  target: 'http://127.0.0.1:8079',  // target host
		  ws: true,  // proxy websockets
		  changeOrigin: true,  // needed for virtual hosted sites
		  pathRewrite: {
			  '^/api': ''  // rewrite path
		  }
	  },
	}, 
  }
}