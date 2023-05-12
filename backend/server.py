from flask import Flask
from flask_cors import CORS
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins=["*"])


@socketio.on("connect")
def on_connect():
    print("Connected")
    socketio.emit("data", {})


@socketio.on("vote")
def on_vote(data):
    print("Vote!", data)
