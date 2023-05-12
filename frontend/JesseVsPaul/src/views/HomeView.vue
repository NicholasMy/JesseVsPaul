<template>
  <main>

    <h1>Jesse Vs Paul</h1>

    <div v-if="battleStore.state.websocketConnected">
      <p>Vote for who won the rap battle! You can vote unlimited times! Keep tapping! The live score is shown on the front display.</p>
      <br>
      <button @click="battleStore.sendVote('Jesse')">Jesse</button>
      <button @click="battleStore.sendVote('Paul')">Paul</button>
      <br>
      <br>
      <br>
      <br>
      <p>You sent {{ battleStore.state.sessionVotes }} vote(s) during this session.</p>

    </div>
    <p v-else>
      Connecting to server...
    </p>

  </main>
</template>

<script setup lang="ts">
import {useBattleStore} from "@/stores/battleStore";

const battleStore = useBattleStore()

</script>

<style scoped>
button {
  background-color: darkblue;
  color: white;
  margin: 10px;
  padding: 10px;
  width: 200px;
}

button:active {
  background-color: blue;
}

</style>