<template>
  <h1>JESSE VS PAUL</h1>
  <h2>Who won? Vote at Battle.cse116.com</h2>
  <div class="container">
    <div class="jesse" :class="{winning: jesseWinning}">
      <h1>Jesse: {{ battleStore.state.status.Jesse }}</h1>

    </div>
    <div class="paul" :class="{winning: paulWinning}">
      <h1>Paul: {{ battleStore.state.status.Paul }}</h1>
    </div>
  </div>
  <br>
  <p>You can vote unlimited times! Keep tapping!</p>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.jesse, .paul {
  background-color: #adadad;
  color: black;
  margin: 10px;
  padding: 40px 20px;
  min-width: 20%;
}

.winning {
  background-color: #0038e3;
  color: white;
}

.jesse {
  width: v-bind(jessePercent+ "%");
}

.paul {
  width: v-bind(pualPercent+ "%");
  text-align: right;
}

</style>

<script setup lang="ts">
import {useBattleStore} from "@/stores/battleStore";
import {computed} from "vue";

const battleStore = useBattleStore()

const jessePercent = computed(() => {
  return (battleStore.state.status.Jesse / (battleStore.state.status.Jesse + battleStore.state.status.Paul)) * 100
})

const pualPercent = computed(() => {
  return (battleStore.state.status.Paul / (battleStore.state.status.Jesse + battleStore.state.status.Paul)) * 100
})

const jesseWinning = computed(() => {
  return battleStore.state.status.Jesse > battleStore.state.status.Paul
})

const paulWinning = computed(() => {
  return battleStore.state.status.Paul > battleStore.state.status.Jesse
})

</script>