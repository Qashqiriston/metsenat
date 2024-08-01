<template>
  <div class="bg-[#f5f5f7]">
    <div class="container">
      <table class="w-full border-separate border-spacing-y-2">
        <thead class="font-rubic text-xs font-medium text-[#B1B1B8]">
          <tr class="text-left">
            <th class="">#</th>
            <th class="">F.I.SH.</th>
            <th class="">Tel.Raqami</th>
            <th class="">Homiylik summasi</th>
            <th class="">Sarflangan summa</th>
            <th class="">Sana</th>
            <th class="">Holati</th>
            <th class="">Amallar</th>
          </tr>
        </thead>
        
        
        <tbody class="w-full pt-3 bg-white">
          <tr v-for="(item, index) in usersList" :key="index">

          

            <td class="py-5 font-rubic text-base text-[#1D1D1F] pl-[15px] rounded-l-lg">{{ index + 1 }}</td>
            <td class="py-5 font-rubic text-base font-medium text-[#1D1D1F]">
              
            <router-link  :to="{
                  name: 'AboutSponsors',
                  params: {
                    id: index + 1
                  } ,
                  query: {name: item?.full_name}

                }">
              {{ item?.full_name }}
            </router-link>

            </td>
            <td class="py-5 font-rubic text-sm text-[#1D1D1F]">{{ item?.phone }}</td>
            <td class="py-5 font-rubic text-base font-medium text-[#1D1D1F]">
              {{ item?.sum }}
              <span class="py-6 font-rubic text-base font-medium text-[#B2B7C1]">UZS</span>
            </td>
            <td class="py-5 font-rubic text-base font-medium text-[#1D1D1F]">
              {{ item?.spent
              }}<span class="py-5 font-rubic text-base font-medium text-[#B2B7C1] pl-1">UZS</span>
            </td>
            <td class="py-5 text-base text-[#1D1D1F] font-rubic">
              {{ item?.created_at.slice(0, 10) }}
            </td>
            <td :class="toggleColor(item)">{{ item?.get_status_display }}</td>
            <td class="py-5 rounded-r-lg"><img src="/icon/eye.svg" alt="eye" /></td>


          </tr>
        </tbody>
      </table>
      <div class="flex justify-between py-6">
        <div>
          <p class="font-rubic text-[15px] leading-[22px]">
            {{ usersStore.dataLength }} tadan 1-{{ selectVal }} ko‘rsatilmoqda
          </p>
        </div>

        <div class="flex">
          <div class="flex gap-3 items-center pr-5">
            <p class="font-rubic text-[15px] leading-[22px]">Ko‘rsatish</p>
            <select  v-model="selectVal" @change="changePage">
              <option value="5">5</option>
              <option selected value="10">10</option>
              <option value="15">15</option>
            </select>
            <pre>{{ usersList?.length }}</pre>
          </div>
          <div>
            <vue-awesome-paginate
              :total-items="length"
              :items-per-page="15"
              :max-pages-shown="5"
              v-model="currentPage"
              :on-click="pageChanged"
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch, watchEffect } from 'vue'
import { useUsersStore } from '@/stores/users.js'

const selectVal = ref(10)

const usersStore = useUsersStore()

const usersList = computed(() => usersStore.users)

const length = ref()


const updateLimit = computed(() => (cal) => {
  usersStore.params.limit = cal
})



const toggleColor = (item) => {
  if (item?.get_status_display == 'Yangi') {
    return 'blue'
  }
  if (item?.get_status_display == 'Moderatsiyada') {
    return 'yellow'
  }
}

// use with pagination
const exampleItem = () => {
  usersList.value.map((i) => (length.value = i))
}

const currentPage = ref(1)

const pageChanged = (page) => {
  currentPage.value = page
}

watchEffect(() => {
  usersStore.fetchList(currentPage.value, selectVal.value);
});


console.log(usersList);
</script>

<style>
.yellow {
  color: #ffa445;
}
.blue {
  color: #5babf2;
}

/* use width pagination */
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 32px;
  width: 32px;
  border-radius: 4px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
