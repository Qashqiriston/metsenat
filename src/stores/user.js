import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const aboutMe = ref({
    name: "Akobir",
    lastName: "Tojiyev",
  });
  const params = reactive({
    offset: 0,
    limit: 10,
  });

  const fullName = computed(() => {
    return `${aboutMe.value.name} ${aboutMe.value.lastName}`;
  });

  const changeName = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

    aboutMe.value = await res.json();
  };

  return { aboutMe, fullName, changeName };
});

// state: () => {
//     return {
//         aboutMe:{
//             name: 'Akobir',
//             lastName: 'Tojiyev'
//         },
//         isMerry: false
//     }
// },
// getters:{
//     fullName(){
//       return  `${this.aboutMe.name} ${this.aboutMe.lastName}`
//     }
// },
// actions:{
//     changeName(newName){
//         this.aboutMe.name = newName
//     },
//     async fetchUser() {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
//         this.aboutMe = await res.json()
//     }
// }
