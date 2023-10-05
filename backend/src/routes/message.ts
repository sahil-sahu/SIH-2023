import express from 'express';

const router = express.Router();

const accountSid = 'ACae7ca100603b07db9a33a7b2b8a3efbb';
const authToken = '9aed2afe7ea0874b1e3409da7effde04';
const verifySid = "VAc2b18ec63cc4fcd130ad47ecbb3f0071";
const client = require('twilio')(accountSid, authToken);

router.get('/', async (req, res) => {
    res.json({
        "good" : "good",
    });
  }
  );

  router.get('/:phone', async (req, res) => {
    const { phone } = req.params;
    await client.verify.v2.services(verifySid).ve
    // messages
    // .create({
    //     body: 'Flammable Gas Detected',
    //     from: '+12568297244',
    //     to: `+91${phone}`
    // })
    res.json({
        "sms" : "done",
        phone
    });
  }
  );

  export { router as smsRouter };
