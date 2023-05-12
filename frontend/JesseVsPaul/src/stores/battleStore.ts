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
        sessionVotes: 0,
        lastvote: new Date()
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

        state.sessionVotes++


        if (lastVoteTooNew()) {
            // Pretend to count the vote ;)
            return
        }

        state.lastvote = new Date()

        socket.emit("vote", {
            "candidate": candidate
        });
    }

    function lastVoteTooNew(): boolean {
        const now = new Date()
        const diff = now.getTime() - state.lastvote.getTime()
        return diff < 300
    }

    return {state, sendVote}
})