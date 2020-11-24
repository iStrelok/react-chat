const express = require("express")
const http = require("http")
const app = express()
const servidor = http.createServer(app)

const socketio = require("socket.io")
const io = socketio(servidor)

servidor.listen(3000, () => console.log('Todo bien'))