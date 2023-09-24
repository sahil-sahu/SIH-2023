// import * as mqtt from 'mqtt';
// import { useEffect } from 'react';
// // Define an Express route to publish a message to an MQTT topic
// // client.publish(topic, message, (error) => {
// //     if (error) {
// //       console.error('MQTT Publish Error:', error);
// //       res.status(500).send('Failed to publish message');
// //     } else {
// //       console.log(`Published to MQTT topic ${topic}: ${message}`);
// //       res.send('Message published to MQTT');
// //     }
// //   })

// export function Mqtt(){
//     const brokerUrl = 'mqtt://localhost:1883';
//     const client = mqtt.connect(brokerUrl);
//     client.on('connect', () => {
//         console.log('Connected to MQTT broker');
//         // client.subscribe('web', (err) => {
//         //   if (!err) {
//         //     console.log('Subscribed to topic: web');
//         //   } else {
//         //     console.error('Failed to subscribe:', err);
//         //   }
//         // });
//       });
//     client.on('message', (topic, message) => {
//         // Handle incoming MQTT messages here
//         if(topic === 'web'){
//             console.log(message);
//         }
//     });

//     client.on('error', (err) => {
//     console.error('MQTT Error:', err);
//     });
//     return <div></div>;
// };