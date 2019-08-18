// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACeb3b324c1f46c126b178214d7b9ef181';
const authToken = 'bb73321f1059c9c28eb85ede9b3b6ae7';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12029153020',
     to: '+12028343267'
   })
  .then(message => console.log(message.sid));
