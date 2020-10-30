const express = require('express');
const router = express.Router();

//Delete cards
router.delete('/:userid', async (req, res) => {

  const { xappid, token, pin } = req.headers;
  const { card_id } = req.body;

  console.log('xappid: ' + xappid + ' y token: ' + token + ' y pin: ' + pin);
  console.log('ID card: ' + card_id);

  var rta = {
    msg: "Borrado de tarjeta exitoso"
  }

  if (card_id == 13) {

    res.status(401)
    res.send("Error al borrar la tarjeta")

  } else {

    res.send(JSON.stringify(rta));

  }

});

//Edit cards
router.put('/:userid', async (req, res) => {

  const { xappid, token, pin } = req.headers;
  const { card_id, card_name, card_icon } = req.body;

  console.log('xappid: ' + xappid + ' y token: ' + token + ' y pin: ' + pin);
  console.log('ID card: ' + card_id + ' card_name: ' + card_name + ' card_icon: ' + card_icon);

  var rta = {
    msg: "Editado de tarjeta exitoso"
  }

  if (card_id == 13) {

    res.status(401)
    res.send("Error al editar la tarjeta")

  } else {

    res.send(JSON.stringify(rta));

  }

});

//Add card
router.post('/', async (req, res) => {

  const { xappid, token, pin } = req.headers;
  const { user_id, serial_number, card_name, card_icon } = req.body;

  console.log('xappid: ' + xappid + ' y token: ' + token + ' y pin: ' + pin);
  console.log('User ID: ' + user_id + ' card_name: ' + card_name + ' card_icon: ' + card_icon + ' serial number: ' + serial_number);

  var rta = {
    msg: "Tarjeta agregada exitosamente"
  }

  if (card_name == 'colomaraca') {

    res.status(401)
    res.send("Error al agregar la tarjeta")

  } else {

    res.send(JSON.stringify(rta));

  }

});

module.exports = router;