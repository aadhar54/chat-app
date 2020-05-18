const socket = io()

const inp = document.getElementById('inp')
const btn = document.getElementById('btn')
const list = document.getElementById('list')

btn.onclick = function(){
    socket.emit('msg_snd',{msg:inp.value})
    console.log('client to server')
}

socket.on('msg_rcvd',(data)=>{
    const li = document.createElement('li')
    li.innerText = data.msg
    list.appendChild(li)
    console.log('printing list item got from server')
})



