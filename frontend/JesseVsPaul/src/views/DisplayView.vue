<template>
  <h1>JESSE VS PAUL</h1>
  <h2>Who won? Vote at Battle.cse116.com</h2>
  <h1>Jesse: {{ battleStore.state.status.Jesse }}</h1>
  <h1>Paul: {{ battleStore.state.status.Paul }}</h1>
  <br>
  <p>You can vote unlimited times! Keep tapping!</p>
</template>

<style>
</style>

<script setup lang="ts">
import {useBattleStore} from "@/stores/battleStore";

const battleStore = useBattleStore()

</script>