<template>
	<div id="all">
		<div id="head">
			<v-row>
				<!-- <v-container  > -->
				<v-col cols="2" offset="1">
					<v-row no-gutters>
						<v-col cols="4">
							<!-- <div id="img"> -->
								<img src="../../assets/logo.png" id="headImg" />
							<!-- </div> -->
						</v-col>
						<v-col cols="8">
							<div >
								adsadssasddddddd
							</div>
							<div>
								等级
							</div>
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="1"  offset="6">
					<div style="background-color: #8A2BE2;">钻石</div>
				</v-col>
				<v-col cols="1">
					<div style="background-color: #FFF1EB;">钻石</div>
				</v-col>
				<v-col cols="1"></v-col>
				<!-- </v-container> -->
			</v-row>
		</div>
		<div id="body">
			<v-row>
				<v-col cols="1">
					<div style="background-color: blue;">好友</div>
				</v-col>
				<v-col cols="5">
					<div style="background-color: brown">房间1</div>
				</v-col>
				<v-col cols="5">
					<div style="background-color: crimson;">房间2</div>
				</v-col>
				<v-col cols="1">
					<div style="background-color: blue;">签到</div>
				</v-col>
			</v-row>
		</div>
		<div id="bottom" cols="12">
			<v-bottom-navigation v-model="bottomNav" dark shift>
				<v-btn>
					<span>设置</span>
					<v-icon>mdi-television-play</v-icon>
				</v-btn>

				<v-btn>
					<span>商城</span>
					<v-icon>mdi-book</v-icon>
				</v-btn>
				<v-btn>
					<span>背包</span>
					<v-icon>mdi-book</v-icon>
				</v-btn>

				<v-btn>
					<span>战绩</span>
					<v-icon>mdi-image</v-icon>
				</v-btn>
			</v-bottom-navigation>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				alignmentsAvailable: [
					'start',
					'center',
					'end',
					'baseline',
					'stretch',
				],
				alignment: 'start',
				dense: false,
				justifyAvailable: [
					'start',
					'center',
					'end',
					'space-around',
					'space-between',
				],
				justify: 'center',
				bottomNav: 3,
			}
		},
		computed: {
			color() {
				switch (this.bottomNav) {
					case 0:
						return 'blue-grey'
					case 1:
						return 'teal'
					case 2:
						return 'brown'
					case 3:
						return 'indigo'
				}
			},
		},
	}
</script>

<style>
	#all {
		width: 100%;
		height: 100%;
	}

	#head {
		background-color: #ACE0F9;
		width: 100%;
		height: 10%;
	}

	#body {
		width: 100%;
		height: 80%;
		background-color: blueviolet;
	}

	#bottom {
		background-color: chartreuse;
		width: 100%;
		height: 10%;
	}
	#headImg{
		width: 60px;
		height: 60px;
	}
/* 	img {
		height: 100%;
		bottom: 91%;
	} */

/* 	#img {
		background-color: #7FFF00;
		line-height: 0;
		position: absolute;
		bottom: 90%;
		top: 0;
	} */
</style>
