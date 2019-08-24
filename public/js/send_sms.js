// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
require('dotenv').config();

const client = require('twilio')(process.env.accountSid, process.env.authToken);


client.messages
    .create({
        body: 'FlexSpace rocks!',
        from: '+12056495728',
        to: '+12028343267'
    })
    .then(message => console.log(message.sid));

    //to: '+12029755455'