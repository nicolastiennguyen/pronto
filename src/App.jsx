import React, { useEffect, useState } from 'react'
import './App.css'
import WebSocket, { WebSocketServer } from 'ws'

function App() {
  const wss = new WebSocket({port:8080})


  useEffect(() => {
    wss.on('connection', (ws) => {
      console.log('New client connected!')

      ws.send(JSON.stringify('Welcome!'))
      ws.on('message', (message) => {
        ws.send(`Your message: ${message}`)
      })
    })
  }, [])

  return (
    <div className="App">
      Hello World
    </div>
  )
}

export default App
