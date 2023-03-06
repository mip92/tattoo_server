import express from 'express';

const router = express.Router();

router.get('/cities', (req, res) => {
  console.log('1235');
  res.send('dfdf');
});

export default router;
//https://cerverclock2022.herokuapp.com/api/auth/activate/bb79f164-b3a5-4a1c-9f5f-e759a6a92f09
