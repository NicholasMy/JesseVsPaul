import {defineStore} from "pinia";

import {io} from "socket.io-client";
import {reactive} from "vue";

interface voteOptions {
    Jesse: number
    Paul: number
}

export const useBattleStore = defineStore('battleStore', () => {
    const state = reactive({
        websocketConnected: false,
        status: {} as voteOptions,
        sessionVotes: 0
    });

    const socket = io(import.meta.env.VITE_API_PATH, {transports: ['websocket']});

    socket.on("connect", () => {
        state.websocketConnected = true
    })

    socket.on("disconnect", () => {
        state.websocketConnected = false;
    })

    socket.on("status", (data: voteOptions) => {
        state.status = data
    })

    function sendVote(candidate: string) {
        socket.emit("vote", {
            "candidate": candidate
        })
        state.sessionVotes++
    }


    return {state, sendVote}
})