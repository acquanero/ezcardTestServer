const express = require('express');
const router = express.Router();

//Ruta del primer login
router.post('/:userid/:providerid', async (req, res) => {

  const { xappid, token } = req.headers;
  const { serial_number } = req.body;


  console.log('xappid: ' + xappid + ' y token: ' + token )
  console.log('serial number: ' + serial_number)

  var rta_login = {
    msg: "entry point exitoso"
  }

  if (serial_number == "colomaraca") {

    res.status(401)
    res.send("Error de entry")

  } else {

    res.send(JSON.stringify(rta_login));

  }

});


module.exports = router;