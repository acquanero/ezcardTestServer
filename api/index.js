const express = require('express');

const router = express.Router();

const user = require('./user/routes');

router.use('/user', user);

/* GET home page. */
router.get('/', (req, res) => {
  res.json({ title: 'Ezcard API' });
});

module.exports = router;
