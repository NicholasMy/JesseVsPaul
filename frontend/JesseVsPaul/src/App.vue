<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <v-app>
    <RouterView/>
    <div class="footer">
      Created by <a href="https://nicholasmy.com">Nicholas</a> in a few minutes. (UI Design is my passion /s)<br><a href="https://github.com/NicholasMy/JesseVsPaul"> View Source</a>
    </div>
  </v-app>
</template>

<style>
body {
  background-color: black;
  color: white;
  padding: 10px;
}

.footer {
  margin-top: 100px;
  padding: 10px;
  background-color: #2c3e50;
}

a {
  color: lightblue;
}

</style>
