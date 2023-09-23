import express from 'express';
import atms from '../schema/atms';

const router = express.Router();

interface nearby {
  lng: number;
  lat: number;
}
router.get('/nearby', async (req, res) => {
  try {
    const { lng, lat }:nearby = req.body;
    const query = {
        location: {
          $near: {
            $geometry: {
               type: "Point" ,
               coordinates: [ lng , lat ]
            },
            $maxDistance: 5000,
          }
        }
   };
   const places = await atms.find(query);
    res.json(places);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching atms' });
  }
});

export { router as featureRouter };
