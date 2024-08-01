<template>
  <div class="bg-[#f5f5f7]">
    <div class="container flex justify-between">
      <div v-for="(elem, index) in data">
        <div class="flex">
          <div class="bg-white w-[381px] flex py-6 pl-6 rounded-md">
            <img :src="elem.img" :key="index" alt="rasm" class="w-12 h-12" />
            <div class="ml-4">
              <p class="font-rubic font-normal text-xs text-[#7A7A9D]">
                {{ elem.text }}
              </p>
              <p class="font-proDisplay font-bold text-xl text-[#2E384D]">
                {{ elem.price }}
                <span class="font-proDisplay font-bold text-xl text-[#B2B7C1]"
                  >UZS</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const data = [
  {
    img: "public/icon/dashImgBlu.svg",
    text: "Jami to‘langan summa",
    price: "1 684 325 000",
  },
  {
    img: "public/icon/dashImgYellow.svg",
    text: "Jami to‘langan summa",
    price: "14 098 530 000",
  },
  {
    img: "public/icon/dashImgRed.svg",
    text: "Jami to‘langan summa",
    price: "12 414 205 000",
  },
];

</script>

<style lang="scss" scoped></style>
