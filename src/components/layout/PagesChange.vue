<script setup>
import CButton from "@/components/form/CButton.vue";
import CCard from "@/components/form/CCard.vue";
import CInput from "@/components/form/CInput.vue";
</script>

<template>
  <div class="bg-[#fafafa]">
    <div class="container flex justify-between pt-6">
      <div class="">
        <CCard />
      </div>
      <div class="flex">
        <div>
          <CInput />
        </div>
        <div>
          <CButton class="bg-[#EDF1FD] p-2 ml-8">
            <template #suffix>
              <div class="flex px-8">
                <img src="/public/icon/filterIcon.svg" alt="filter" />
                <p
                  class="font-proDisplay font-medium text-sm text-[#3365FC] pl-1"
                >
                  Filter
                </p>
              </div>
            </template>
          </CButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
