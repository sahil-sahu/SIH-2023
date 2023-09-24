import * as mqtt from 'mqtt';
import express from 'express';
import { io } from '../app';
import orders from '../schema/orders';

const router = express.Router();

const brokerUrl = 'mqtt://3.110.230.54:1883';
const client = mqtt.connect(brokerUrl);

client.on('connect', () => {
  console.log('Connected to MQTT broker');
  client.subscribe('esp', (err) => {
          if (!err) {
            console.log('Subscribed to topic: web');
          } else {
            console.error('Failed to subscribe:', err);
          }
        });
});

client.on('message', (topic, message) => {
        // Handle incoming MQTT messages here
        const mymessage = message?.toString() ?? "";
        if(topic === 'esp' && mymessage== "done"){
          io.emit('web', {type:"job", status: true});
        }
    });

client.on('error', (err) => {
  console.error('MQTT Error:', err);
});

router.post('/', (req, res) => {
  try {
    const message = req.body;
    const order = new orders({
      payment: false,
      order: req.body,
    });

    // Save the newPayment document to the database
    order.save()
    io.emit('web', {type:"initialize", payload: message});
    res.json("Done");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error in checkout' });
  }
});

router.post('/pay', async (req, res) => {
  const paymentid = req.body.paymentid;
  const updatedPayment = await orders.findOneAndUpdate(
    { _id:paymentid },
    { payment: true },
    { new: true } // To return the updated document
    );
  io.emit('web', {type:"payment", status: true});
  client.publish('esp', JSON.stringify(updatedPayment.order), (error) => {
    if (error) {
      console.error('MQTT Publish Error:', error);
      res.status(500).send('Failed to publish message');
    }
  })
  res.json("Done");
});

export { router as orderRouter };