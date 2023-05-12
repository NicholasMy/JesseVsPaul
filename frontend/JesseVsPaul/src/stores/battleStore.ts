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
        status: {} as voteOptions
    });

    const socket = io(":7845", {transports: ['websocket']});

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
    }


    return {state, sendVote}
})