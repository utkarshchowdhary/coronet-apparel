require('dotenv/config')
const path = require('path')
const express = require('express')
const nodemailer = require('nodemailer')
const compression = require('compression')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER_NAME,
    pass: process.env.SMTP_PASSWORD
  }
})

const app = express()

app.set('port', process.env.PORT)

app.use(express.json({ limit: '10kb' }))

app.use(compression())

app.use(express.static(path.join(__dirname, 'client/build')))

app.post('/api/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  }

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr })
    } else {
      res.status(200).send({ success: stripeRes })
    }
  })
})

app.post('/api/contact', (req, res) => {
  const mailOptions = {
    to: process.env.RECIPIENT_EMAIL,
    from: process.env.SENDER_EMAIL,
    subject: 'Coronet Apparel Automated Mail',
    text: `Message from ${req.body.name} <${req.body.email}>:\n${req.body.message}`
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(500).json({ error: 'message not sent: an error occurred' })
    } else {
      res.status(200).json({ message: `message sent: ${info.messageId}` })
    }
  })
})

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`)
})
