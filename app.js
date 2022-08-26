import { Client } from 'whatsapp-web.js'
import qrcode from 'qrcode-terminal'

const client = new Client()

client.on('qr', (qr) => {
  console.log('QR RECEIVED', qr)
  qrcode.generate(qr)
})

client.on('ready', () => {
  console.log('Client is ready!')
})

client.on('message', (msg) => {
  if (msg.body == '!ping') {
    msg.reply('pong')
  } else if (msg.body == 'p') {
    for (let i = 0; i < 10; i++) {
      msg.reply('Lu Ateis ya')
    }
  }
})

client.on('message', (msg) => {
  console.log(msg.body)
})

client.initialize()
