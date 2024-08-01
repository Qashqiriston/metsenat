import { defineStore } from 'pinia'
import { onBeforeMount, reactive, ref } from 'vue'
import axios from 'axios';

export const useUsersStore = defineStore('users', () => {
  const users = ref([])
  const dataLength = ref()

  // const params = reactive({
  //   page: 1,
  //   limit: 10
  // })

  const fetchList = (val, limit) => {
    axios
      .get('https://metsenatclub.xn--h28h.uz/api/v1/sponsor-list/', {
        params: {
          page: val,
          page_size: limit 
        }
      })
      .then(({ data }) => {
        dataLength.value = data.count
        users.value = data.results
      })
      .catch((e) => console.log(e))
  }

  onBeforeMount(() => {
    fetchList()
  })


  return { users, fetchList, dataLength, }
})
