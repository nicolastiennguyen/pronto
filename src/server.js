import WebSocket, { WebSocketServer } from 'ws'

const wss = new WebSocketServer({port:8080})

wss.on('connection', (ws) => {
  console.log('A new client connected!')
  ws.send('Welcome new client!')

  ws.on('message', (data) => {
    console.log(`received a message: ${data}`)
    ws.send(`Your message: ${data}`)
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data)
      }
    })
  })
})