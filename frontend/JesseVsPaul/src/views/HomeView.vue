<template>
  <main>
    <p>Home</p>
    <v-progress-circular></v-progress-circular>
    <v-card>
      Hi {{battleStore.state.websocketConnected}}
    </v-card>

    <button @click="battleStore.sendVote('Jesse')">Jesse</button>
    <button @click="battleStore.sendVote('Paul')">Paul</button>

  </main>
</template>

<script setup lang="ts">
import {useBattleStore} from "@/stores/battleStore";

const battleStore = useBattleStore()

</script>