<template>
	<div class="flex">
		<div class="account-login">
			<div class="account-login-title">后台登录</div>
			<div class="account-login-form">
				<el-form ref="formRef" :model="form" style="width: 300px" :rules="rule">
					<el-form-item prop="account">
						<el-input v-model="form.account" placeholder="请输入用户名" prefix-icon="UserFilled" />
					</el-form-item>
					<el-form-item prop="password">
						<el-input v-model="form.password" show-password placeholder="请输入密码" prefix-icon="lock" />
					</el-form-item>
				</el-form>
			</div>
			<div class="account-login-submit">
				<el-button round size="large" @click="login(formRef)">现在登录</el-button>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	import { ref } from 'vue'
	import { useRouter } from 'vue-router'
	import { accountLogin } from '@/api/login'
	import type { FormInstance, FormRules } from 'element-plus'
	import { localStorageCache } from '@/utils/cache'
	import { formType } from './type'

	const router = useRouter()

	const form = ref<formType>({
		account: 'admin',
		password: '123456',
	})

	const rule = ref<FormRules>({
		account: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
		password: [
			{
				required: true,
				trigger: 'blur',
				message: '请输入密码',
			},
		],
	})
	const formRef = ref<FormInstance>()

	const login = (formRef: FormInstance | undefined) => {
		if (!formRef) return
		formRef.validate(async (valid: boolean) => {
			if (valid) {
				const { data } = await accountLogin(form.value)
				localStorageCache.set('access_token', data[0].access_token)
				router.push('/')
			}
		})
	}
</script>
<style lang="scss" scoped>
	.flex {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	.account-login {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		&-title {
			width: 100%;
			color: #2bc17b;
			font-size: 40px;
		}
		&-form {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 55px 0px 90px;
			.el-input {
				height: 45px;
			}
		}
		&-submit {
			width: 100%;
			.el-button {
				width: 170px;
				color: #fff;
				background-color: #2bc17b;
			}
		}
	}
</style>
