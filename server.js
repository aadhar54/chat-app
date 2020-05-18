const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app) 
const io = socketio(server)

io.on('connection',(socket)=>{

    socket.on('msg_snd',(data)=>{
        console.log('server to client')
        socket.broadcast.emit('msg_rcvd',data)
    })
    console.log('connected with socket id',socket.id)  
})

app.use('/',express.static(__dirname + '/public'))

server.listen(8888,()=>{
    console.log('listening on http://localhost:8888/');
})
