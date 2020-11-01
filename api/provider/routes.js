const express = require('express');
const router = express.Router();

//Disassociate service from cards
router.put('/unbind', async (req, res) => {

    const { xappid, token, pin } = req.headers;
    const { provider_id } = req.body;
  
    console.log('xappid: ' + xappid + ' y token: ' + token + ' y pin: ' + pin);
    console.log('Provider id: ' + provider_id );
  
    var rta = {
      msg: "Desasociado exitoso"
    }
  
    if (provider_id == 1) {
  
      res.status(401)
      res.send("Error al desasociar la tarjeta")
  
    } else {
  
      res.send(JSON.stringify(rta));
  
    }
  
  });


module.exports = router;