const express = require('express');
const router = express.Router();

//Ruta del primer login
router.post('/login', async (req, res) => {

  const { mail, password } = req.body;

  console.log('mail: ' + mail + ' y password: ' + password )

  var rta_login = {
    user_id: 1234,
    token: "abc123"
  }

  if (password == "colomaraca") {

    res.status(401)
    res.send("Error de logueo")

  } else {

    res.send(JSON.stringify(rta_login));

  }

});

//Ruta del login enviando el token en el header
router.get('/login/:userid', async (req, res) => {

  var myid = req.params.userid;
  var tokenObtenido = req.headers.token;
  var appidObtenido = req.headers.xappid;

  console.log("User ID obtenido: " + myid);
  console.log("Token recibido: " + tokenObtenido);
  console.log("AppId obtenida: " + appidObtenido);

  if (tokenObtenido == "abc123") {

    var rta_succes = {
      msg: "Acceso con token exitoso"
    }

    res.status(200)
    res.send(rta_succes)

  } else {

    var rta_fail = {
      msg: "Fallo el acceso con token"
    }

    res.status(401)
    res.send(rta_fail)

  }

});

//Ruta para sign In
router.post('/register', async (req, res) => {

  const { name, last_name, password, mail, phone, pin } = req.body;
  const {idapp} = req.headers.xappid

  console.log("-----DATOS RECIBIDOS-----")
  console.log("name: " + name);
  console.log("last_name: " + last_name);
  console.log("password: " + password);
  console.log("mail: " + mail);
  console.log("phone: " + phone);
  console.log("pin: " + pin)
  console.log("xappid: " + idapp);

  var rta_signin = {
    user_id: 1234,
    token: "abc123"
  }
  res.send(JSON.stringify(rta_signin));

});

//Ruta para obtener todos los datos del usuario

router.get('/:userid', async (req, res) => {

  var tokenObtenido = req.headers.token;

  console.log(tokenObtenido);

  var rta_userData = {
    name: "Elba",
    surname: "Nanon",
    password: "elba123",
    mail: "elba@gmail.com.es",
    phone: "47778989",
    user_id: 1234,
    cards: [
          {
            card_id: 1,
            name: "Tarjeta Banco",
            icon: 1
          },
          {
        card_id: 2,
        name: "Tarjeta Cloud",
        icon: 2
          },
          {
        card_id: 3,
        name: "Tarjeta trabajo",
        icon: 3
          }
      ],
    providers: [
          {
          provider_id: 1,
          provider_name: "Santander",
          card_id:1,
          enabled: true
          },
          {
          provider_id: 2,
          provider_name: "Amazon",
          card_id:2,
          enabled: true
          },
          {
          provider_id: 3,
          provider_name: "Experta ART",
          card_id:3,
          enabled: true
          }
      ]
}

  res.send(JSON.stringify(rta_userData));

});

//Ruta para update PIN
router.put('/pin/:userid', async (req, res) => {

  const { new_pin } = req.body;

  var pinHeader = req.headers.pin;

  var token = req.headers.token;

  res.send("Body Pin: " + new_pin + " Header Pin: " + pinHeader + " token: " + token);

});


module.exports = router;
