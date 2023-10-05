import { NextApiRequest, NextApiResponse } from 'next';
const accountSid = 'ACae7ca100603b07db9a33a7b2b8a3efbb';
const authToken = 'bddc4a96404dad20d6b622c4887cb898';

// client.messages
//     .create({
    //         body: 'Gass detected',
    //         from: '+12568297244',
    //         to: '+919078101920'
    //     })
    //     .then(message => console.log(message.sid))
    //     .done();
    
    export async function GET(request: Request,{ params }: { params: { phone: string } }) {
    const client = require('twilio')(accountSid, authToken);
    const { phone } = params;
    await client.messages
    .create({
        body: 'Flammable Gas Detected',
        from: '+12568297244',
        to: `+91${phone}`
    })
    return Response.json({"done":true, phone});
  }