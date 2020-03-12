const baseUrl = '/api'
// const baseUrl = 'http://127.0.0.1:10010'
const config = {
  locale: 'zh-CN', // en-US, zh-CN
  url: baseUrl,
  debug: {
    http: false // http request log
  },
  api: `${baseUrl}`,
  theme:{
    primary: "#2196F3",
    secondary: "#455A64",
    accent: "#9c27b0",
    error: "#f44336",
    warning: "#FFC107",
    info: "#64B5F6",
    success: "#4caf50"
  },
  proxyTable: {
	 '/api': {  //使用"/api"来代替"http://f.apiplus.c" 
	    target: 'http://127.0.0.1:8080/', //源地址 
	    changeOrigin: true, //改变源 
	    pathRewrite: { 
	      '^/api': 'http://x.apiplus.cn' //路径重写 (经测试：这里不为空或'/’,得写域名(列如：http://f.apiplus.cn))
	      } 
	  } 
  },
  /*  devServer: { // 开发环境下runtime
      proxy: { // 代理服务器
  	  // 接口地址为 http://127.0.0.1:7001/api/register
        '/api/register': { 
          target: 'http://127.0.0.1:7001',
          secure: false, //是否使用 Https安全传输协议
          changeOrigin: true 
        }
      }
    } */
}

export default config
