<template>
  <form class="nosubmit">
    <input class="nosubmit" type="search" placeholder="Search..." />
  </form>
</template>

<script setup></script>

<style scoped>
form.nosubmit {
  border: none;
  padding: 0;
}

input.nosubmit {
  width: 100%;
  padding: 9px 4px 9px 40px;
  background: transparent url("/public/icon/searchLupa.svg") no-repeat 13px
    center;
}

button[type="submit"]:focus,
input[type="search"]:focus {
  box-shadow: 0 0 3px 0 #1183d6;
  border-color: #1183d6;
  outline: none;
}

button[type="submit"]:hover {
  opacity: 1;
}

form {
  width: 284px;
  border-radius: 5px;
  background-color: #e8e8e8;
  color: #555;
  display: flex;
  padding: 2px;
  border: 1px solid currentColor;
  border-radius: 5px;
  margin: 0 0 30px;
}
</style>
