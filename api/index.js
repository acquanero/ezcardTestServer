const express = require('express');

const router = express.Router();

const user = require('./user/routes');
const cards = require('./cards/routes');
const entry = require('./entry/routes');
const provider = require('./provider/routes');

router.use('/user', user);
router.use('/cards', cards);
router.use('/entry', entry);
router.use('/provider', provider);

/* GET home page. */
router.get('/', (req, res) => {
  res.json({ title: 'Ezcard API' });
});

module.exports = router;
