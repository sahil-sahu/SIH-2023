import express from 'express';
import users from '../schema/users';

const router = express.Router();



// Create a new user

// Fetch all users
router.get('/', async (req, res) => {
  try {
    const allusers = await users.find();
    res.json(allusers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching use' });
  }
});

export { router as usersRouter };
