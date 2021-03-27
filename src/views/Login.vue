<template>
  <div id="login">
    <img
      class="logo"
      src="https://s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png"
      alt=""
    />
    <div class="login-body">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          center
          clearable
          label="验证码"
          placeholder="输入验证码"
          v-model="verify"
        >
          <template #button>
            <canvas
              :width="width"
              :height="height"
              @click="onClick"
              id="verify"
            ></canvas>
          </template>
        </van-field>
        <div style="margin: 16px;">
          <div
            class="link-register"
            @click="toggle(type == 'login' ? 'register' : 'login')"
          >
            {{ type === 'login' ? '前往注册' : '前往登录' }}
          </div>

          <van-button round block color="#1baeae" native-type="submit">{{
            type === 'login' ? '立即登录' : '立即注册'
          }}</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, onMounted } from 'vue'
import { login, register } from '@/service/user'
import { setLocal } from '@/utils/utils'
import md5 from 'js-md5'
import { Toast } from 'vant'
import { draw } from '@/utils/verify'

export default {
  setup() {
    let verifyRef = ref(null)
    let state = reactive({
      username: '',
      password: '',
      type: 'login',
      imgCode: '',
      verify: '',
      width: 120,
      height: 40
    })

    let toggle = v => {
      state.type = v
      state.verify = ''
      state.imgCode = draw('#verify')
    }

    let onClick = () => {
      state.imgCode = draw('#verify')
    }

    let onSubmit = async values => {
      state.imgCode = verifyRef.value.imgCode || ''
      if (state.verify.toLowerCase() != state.imgCode.toLowerCase()) {
        Toast.fail('验证码有误')
        return
      }
      let funcApi = state.type == 'login' ? login : register
      let params = {
        loginName: values.username,
        passwordMd5: md5(values.password)
      }
      let { data } = await funcApi(params)
      if (state.type == 'login') {
        setLocal('token', data)
        window.location.href = '/'
      } else {
        Toast.success('注册成功')
        state.type = 'login'
        state.verify = ''
      }
    }

    onMounted(() => {
      // 初始化绘制图片验证码
      state.imgCode = draw('#verify')
    })

    return {
      ...toRefs(state),
      toggle,
      onSubmit,
      verifyRef,
      onClick
    }
  }
}
</script>

<style lang="less">
#login {
  .logo {
    width: 120px;
    height: 120px;
    display: block;
    margin: 80px auto 20px;
  }
  .login-body {
    padding: 0 20px;
  }
  .link-register {
    font-size: 14px;
    margin-bottom: 20px;
    color: @primary;
    display: inline-block;
  }
}
</style>
