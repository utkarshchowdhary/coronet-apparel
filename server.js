const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const compression = require('compression');
const enforce = require('express-sslify');

require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

app.set('port', process.env.PORT);

app.use(express.json({ limit: '10kb' }));

if (process.env.NODE_ENV === 'production') {
  app.use(compression());
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

app.post('/send', (req, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER_NAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `${req.body.name} <${req.body.email}>`,
    to: process.env.SMTP_SEND_TO,
    subject: 'Coronet Apparel Automated Mail',
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(500).json({ error: 'message not sent: an error occurred' });
    } else {
      res.status(200).json({ message: `message sent: ${info.messageId}` });
    }
  });
});

app.listen(app.get('port'), (error) => {
  if (error) throw error;
  console.log(`Server running on port ${app.get('port')}`);
});
