<template>
	<div id="login">
		<div class="login-header"> 欢迎登录 </div>
		<div class="form-group">
			<div class="form-item">
				<input id="username" type="text" placeholder="请输入账号">
			</div>
			<div class="form-item">
				<input id="password" type="password" placeholder="请输入密码">
			</div>
		</div>
		<div class="button-group">
			<button class="login-btn" id="doLogin">登录</button>
		</div>
	</div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped>
#login {
   background: #00c4cd;
    min-height: 100vh
}
.login-header {
    margin: 0;
    padding-top:100px;
    font-size: 32px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    letter-spacing: 2px;
}
.form-group {
    padding: 5%;
}
.form-group .form-item {
    margin-top: 5%;
    border-radius: 20px;
    background-color: #B3DFE2;
    position: relative;
    overflow: hidden;
}
.form-group .form-item input {
    outline: none;
    border: 0;
    background-color: transparent;
    color: #ffffff;
    height: 44px;
    font-size: 16px;
    outline: none; -webkit-appearance: none; border-radius: 0;
    background: transparent;
    width: 100%;
    box-sizing:border-box;
    padding: 0 20px;
    text-align: center;
}
.form-group .form-item button {
    outline: none;
    background: transparent;
    border: 1px #00cc99 dashed;
    color: #ffffff;
    height: 44px;
    border-radius: 5px;
    float: right;
    padding: 1%;
    outline: none; -webkit-appearance: none; border-radius: 0;
    background: transparent;
}
.button-group {
    padding: 5%;
}
.button-group button {
    outline: none;
    border: 0;
    height: 44px;
    margin-top: 4%;
    border-radius: 20px;
    color: #ffffff;
    font-size: 16px;
}
.button-group .login-btn {
    background-color: #ffffff;
    color: #74C3CA;
    width: 100%
}
</style>
