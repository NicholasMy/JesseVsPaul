# JesseVsPaul
Live voting system for the rap battle between Jesse and Paul

A **very** rushed and unpolished webapp just for fun.

### Setup
Run `docker compose up --build -d`

Create an Nginx config that proxy passes `/api` to port 7845 with WebSocket support and defaults anything else to `frontend/dist/index.html`