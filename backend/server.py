import threading
from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

votes = {
    "Jesse": 0,
    "Paul": 0
}

vote_lock = threading.Lock()


@socketio.on("connect")
def on_connect():
    socketio.emit("status", votes)


@socketio.on("vote")
def on_vote(data: dict):
    global votes
    global vote_lock
    with vote_lock:
        if "candidate" in data:
            candidate = data["candidate"]
            if candidate in votes.keys():
                votes[candidate] += 1
                print(f"Vote added for {candidate}", votes)
            else:
                print("User submission contained an invalid candidate", candidate)
        else:
            print("User submission did not include candidate:", data)
    socketio.emit("status", votes)


def main():
    socketio.run(app, "0.0.0.0", 7845)


if __name__ == "__main__":
    main()
