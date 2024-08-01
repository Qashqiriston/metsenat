<template>
  <div class="flex">
    <router-link to="/dashboard">
      <button
        class="font-rubik font-medium text-xs text-tabText border border-[#DDE3FB] rounded-l-lg py-[14px] w-[193px] text-white"
        :class="{
          'bg-mainBlue': activeTab === 'dashboard',
          'bg-white text-mainBlue': activeTab !== 'dashboard',
        }"
        @click="changeTab('dashboard')"
      >
        Dashboard
      </button>
    </router-link>

    <router-link to="/sponsors">
      <button
        class="font-rubik font-medium text-xs text-tabText border border-[#DDE3FB] py-[14px] w-[193px] text-white"
        :class="{
          'bg-mainBlue': activeTab === 'sponsors',
          'bg-white text-mainBlue': activeTab !== 'sponsors',
        }"
        @click="changeTab('sponsors')"
      >
      Sponsors
      </button>
    </router-link>

    <router-link to="/students">
      <button
        class="font-rubik font-medium text-xs text-tabText border border-[#DDE3FB] py-[14px] w-[193px] rounded-r-lg text-white"
        :class="{
          'bg-mainBlue': activeTab === 'students',
          'bg-white text-mainBlue': activeTab !== 'students',
        }"
        @click="changeTab('students')"
      >
      Students
      </button>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
const activeTab = ref("dashboard");

function changeTab(tab) {
  activeTab.value = tab;
}
</script>

<style scoped>
.bg-mainBlue {
  background-color: blue;
}

.text-mainBlue {
  color: blue;
}
</style>

/* --------------------//\\------------------------ ---------------------// ¤
\\-------------------\\ ¤ //
-----------------------\\// ----------------------(___)
----------------------(___) ----------------------(___)
-------_______________(___)______________
--------\_____/\__/-\/--\__/\_____/\____/ ------------\ _°_[------------]_ _° /
----------------\_°_¤ ---- ¤_°_/ --------------------\ ° /
---------------------|\_°_/| ---------------------[|\_/|]
---------------------[|[¤]|] ---------------------[|;¤;|]
---------------------[;;¤;;] --------------------;;;;¤]|]\
-------------------;;;;;¤]|]-\ ------------------;;;;;[¤]|]--\
-----------------;;;;;|[¤]|]---\ ----------------;;;;;[|[¤]|]|---|
---------------;;;;;[|[¤]|]|---| ----------------;;;;[|[¤]|/---/
-----------------;;;[|[¤]/---/ ------------------;;[|[¤/---/
-------------------;[|[/---/ --------------------[|/---/
---------------------/---/ --------------------/---/|]
-------------------/---/]|]; ------------------/---/¤]|];;
-----------------|---|[¤]|];;; -----------------|---|[¤]|];;;
------------------\--|[¤]|];; -------------------\-|[¤]|];
---------------------\|[¤]|] ----------------------\\¤//
-----------------------\|/ ------------------------V */
