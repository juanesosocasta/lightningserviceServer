
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
export default function envioMail(params) {
    const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey('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')
  const msg = {
    to: 'juanesosocasta@gmail.com', // Change to your recipient
    from: 'juan.1701825529@ucaldas.edu.co', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}
