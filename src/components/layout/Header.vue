<script setup>
import CButton from "../form/CButton.vue";
</script>

<template>
  <div class="container">
    <div class="flex justify-between py-3">
      <img src="/public/icon/mainLogo.svg" alt="" />
      <div class="flex">
        <CButton text="click me" class="bg-[#F1F1F1] p-1">
          <template #prefix>
            <div class="flex text-center items-center">
              <p class="font-proDisplay font-bold text-[13px] pl-5 pr-6">
                Shohrux
              </p>
              <div class="w-8 h-8 bg-[#00AE69] flex rounded-sm">
                <img
                  class="maw-w-6 max-h-6 mt-2 ml-1"
                  src="/public/icon/userIcon.svg"
                  alt="user"
                />
              </div>
            </div>
          </template>
        </CButton>
        <img class="ml-10" src="/public/icon/log-outIcon.svg" alt="log-out" />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
