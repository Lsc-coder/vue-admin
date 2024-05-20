<template>
	<div class="login">
		<div class="login-content">
			<div class="login-content-left">
				<div class="login-content-left-title">
					<div class="login-content-left-top-icon">
						<el-icon class=""><Reading size="36" /></el-icon>
					</div>
					<div class="login-content-left-top-title">
						<span>教育管理系统</span>
					</div>
				</div>
				<div class="login-content-left-main">
					<div class="login-content-left-main-title">欢迎回来</div>
					<div class="login-content-left-main-desc">
						<p>这里是管理系统简单介绍</p>
						<p>一款让更多人收益的教育管理平台</p>
					</div>
					<div class="login-content-left-main-register">
						<el-button round size="large">没账号，去注册</el-button>
					</div>
				</div>
			</div>
			<div class="login-content-right">
				<AcountLogin :form="loginData"></AcountLogin>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ref } from 'vue'
	import AcountLogin from './components/AccountLogin.vue'
</script>
<style lang="scss" scoped>
	.login {
		height: 100%;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;

		&-content {
			width: 60%;
			display: flex;
			height: 100%;
			max-height: 600px;

			&-left {
				flex: 2;
				display: flex;
				flex-direction: column;
				background: linear-gradient(180.83deg, rgba(60, 176, 158, 1) 0%, rgba(43, 193, 123, 1) 100%);

				&-title {
					display: flex;
					align-items: center;
					justify-content: flex-start;
					padding: 20px;
				}
				&-top-icon {
					padding: 10px;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				&-top-title {
					font: 500 20px/1.5em PingFangSC-Regular;
				}
				&-main {
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;

					&-title {
						font-size: 32px;
						letter-spacing: 5px;
						// line-height: 52.13px;
						color: rgba(255, 255, 255, 1);
					}
					&-desc {
						font-size: 14px;
						// font-weight: 400;
						letter-spacing: 0px;
						line-height: 34px;
						color: rgba(255, 255, 255, 1);
						margin-bottom: 40px;
					}
					&-register {
						.el-button {
							width: 170px;
							color: #fff;
							background: rgb(47, 188, 132);
						}
					}
				}
			}

			&-right {
				flex: 3;
				background: #fff;
				padding: 0 30px;
			}
		}
	}
</style>
