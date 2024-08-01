<script setup> 

import axios from 'axios'
import { VueRecaptcha } from 'vue-recaptcha'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const isError = ref(false)

const formData = ref({
  username: '',
  password: ''
})

function login() {
  if (!recaptchaValue.value) {
    return
  }

  axios
    .post('https://club.metsenat.uz/api/v1/auth/login/', formData.value)
    .then((res) => {
      localStorage.setItem('refresh', res.data.refresh)
      localStorage.setItem('access', res.data.access)

      router.push({ name: 'Home' })
    })
    .catch((err) => {
      isError.value = true
    })
}

const recaptchaValue = ref(false)
const verifyMet = (token) => {
  console.log(token)
  recaptchaValue.value = !!token
}

const expireMethod = (e) => {
  console.log('method', e)
}
</script>

<template>

  <div class="bg-[#F5F5F7] h-screen">
    <div class="container">
      <div class="flex flex-col items-center justify-center">
        <div class="mt-4 mb-12">
          <img src="/public/icon/mainLogo.svg" alt="mainLogo" />
        </div>

        <div class="w-full rounded-xl max-w-[380px] bg-white">
          <div class="p-8">
            <h1 class="text-textDark font-bold text-2xl mb-11 font-proDisplay">Kirish</h1>
            <form class="form-data" @submit.prevent="login">
              <div>
                <label
                  for="login-input font-proDisplay"
                  class="text-textDark font-medium text-xs mb-2 font-proDisplay"
                  >LOGIN</label
                >
                <input
                  id="login-input"
                  type="text"
                  name="user_name"
                  class="myInput text-inputText outline-none focus:outline-none"
                  placeholder="USERNAME"
                  v-model="formData.username"
                  :class="{ error: isError }"
                />
              </div>
              <div class="my-[22px]">
                <label
                  for="password-input"
                  class="text-textDark font-medium text-xs mb-2 font-proDisplay"
                  >PAROL</label
                >
                <input
                  id="password-input"
                  type="password"
                  name="user_parol"
                  class="myInput text-inputText outline-none focus:outline-none"
                  placeholder="PAROL"
                  v-model="formData.password"
                  :class="{ error: isError }"
                />
              </div>

              <VueRecaptcha
                sitekey="6LcIMaYpAAAAANkcV3TejOufRic9HZV4mVdA3hK6"
                ref="recaptcha"
                @verify="verifyMet"
                @expired="expireMethod"
              ></VueRecaptcha>
              <button
                type="submit"
                class="w-full bg-mainBlue py-3 text-white rounded-md font-proDisplay"
              >
                Kirish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.error {
  border: 2px solid red;
}
</style>
