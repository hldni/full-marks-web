<template>
	<div id="app">
		<div id="bgc" v-on:mousedown.left="createLoves($event)" absolute v-on:mouseup="removeSmallHert()" v-on:mousemove="removeSmallHert()">
			<background ref="background"></background>
		</div>
		<div id="check">
			<v-btn v-bind:small="!isPassword" :disabled="isPassword" ref="passwordLogin" @click="checkLogin" :color="cutColor[0]">密码登录</v-btn>
			<v-btn v-bind:small="isPassword" :disabled="!isPassword" ref="codeLogin"  @click="checkLogin" :color="cutColor[1]">验证码登录</v-btn>
		</div>
		<div id="login">
			<!-- 登录进度条 -->
	
			<v-progress-linear ref="schedu" indeterminate color="cyan" :active="loading"></v-progress-linear>
			<br>
			<span>登录到百分</span>
			<!--定义一个路由锚点，Layout的子组件内容将在这里展示-->
			<router-view/>
			<v-alert v-model="alert" type="error" style="float: left;">
				{{errorMessage}}
			</v-alert>
		</div>
	</div>

</template>

<script>
	import background from './background.vue'
	export default {
		components: {
			background
		},
		data() {
			return {
				alert: false,
				loading: false,//加载登录进度
				isPassword: true,//是否密码登录
				cutColor: ["#1E90FF" , "#00BFFF"],//切换按钮的颜色
				errorMessage:'',
				
			}
		},
		methods: {
			createLoves() {
				this.$refs.background.createLoves(event)
			},
			removeSmallHert() {
				this.$refs.background.removeSmallHert()
			},
			checkLogin(){
				// alert(this.$children.isPassword);
				this.isPassword = !this.isPassword;
				this.cutColor = this.isPassword ?  ["#1E90FF" , "#00BFFF"]: ["#00BFFF" , "#1E90FF"];
				this.$router.push(this.isPassword ? "password" : "codeLogin");
			}
		},
		watch:{
			isPassword(){
				if(!this.isPassword){
				// alert(1);
				}
			}
		}


	}
</script>

<style>
	img {
		width : 50px;
		height: 38px;
	}

	#bgc {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(#fff1eb, #ace0f9);

	}
	#check{
		
		margin-top: 70px;
		margin-left: -200px;
		position: absolute;
		left: 55%;
	}
	#login {
		width: 400px;
		height: 500px;
		margin-left: -200px;
		position: absolute;
		left: 55%;
		margin-top: 100px;
		/* background-image: linear-gradient(-90deg, #29bdd9 10%, #276ace 50%); */
		/* background:linear-gradient(#fff1eb,#ace0f9); */
		/* background:linear-gradient(#243949,#517fa4); */
		/* background-image: linear-gradient(to right, #243949 0%, #517fa4 100%); */
		background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
	}

	span {

		display: flex;
		justify-content: center
	}
</style>
