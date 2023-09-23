import express from 'express';
import atms from '../schema/atms';
import medicines from '../schema/medicines';

const router = express.Router();

interface nearby {
  lng: number;
  lat: number;
}
router.get('/', async (req, res) => {
  try {
   const medicinesAll = await medicines.find();
    res.json(medicinesAll);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching medicine' });
  }
});

export { router as medicineRouter };
