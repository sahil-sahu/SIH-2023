import express from 'express';
import {prisma} from '../app';
import users from '../schema/users';

const router = express.Router();



// Create a new user
router.post('/', async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: req.body,
    });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating user' });
  }
});

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
