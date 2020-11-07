const express = require('express');
const router = express.Router();

//Ruta del primer login
router.post('/login', async (req, res) => {

  const { email, password } = req.body;

  console.log('mail: ' + email + ' y password: ' + password )

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

  const { name, last_name, password, email, cellphone, pin } = req.body;
  const {xappid} = req.headers

  console.log("-----DATOS RECIBIDOS-----")
  console.log("name: " + name);
  console.log("last_name: " + last_name);
  console.log("password: " + password);
  console.log("email: " + email);
  console.log("cellphone: " + cellphone);
  console.log("pin: " + pin)
  console.log("xappid: " + xappid);

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
    last_name: "Nanon",
    password: "elba123",
    email: "elba@gmail.com.es",
    cellphone: "47778989",
    user_id: 1234,
    enabled: true,
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
      },
      {
        card_id: 4,
        name: "Tarjeta Facultad",
        icon: 1
      },
      {
    card_id: 6,
    name: "Tarjeta Carrefour",
    icon: 2
      },
      {
    card_id: 7,
    name: "Tarjeta Edificio",
    icon: 3
      },
      {
        card_id: 8,
        name: "Tarjeta Auto",
        icon: 1
      },
      {
    card_id: 12,
    name: "Tarjeta Trabajo II",
    icon: 2
      },
      {
    card_id: 13,
    name: "Tarjeta Moto",
    icon: 3
      },
      {
        card_id: 14,
        name: "Tarjeta Banco II",
        icon: 1
      },
      {
    card_id: 15,
    name: "Tarjeta Cloud II",
    icon: 2
      },
      {
    card_id: 16,
    name: "Tarjeta trabajo III",
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
          enabled: false
          },
          {
          provider_id: 3,
          provider_name: "Experta ART",
          card_id:3,
          enabled: true
          },
          {
            provider_id: 4,
            provider_name: "Netflix",
            card_id: null,
            enabled: true
            }
      ]
}

  res.send(JSON.stringify(rta_userData));

});

//Ruta para update PIN
router.put('/pin/:userid', async (req, res) => {

  const { new_pin } = req.body;
  const { xappid, token, pin } = req.headers;


  console.log('new pin: ' + new_pin);
  console.log('xappid: ' + xappid + ' y token: ' + token + ' y pin: ' + pin);

  var rta = {
    msg: "PIN cambiado exitosamente"
  }
  res.send(JSON.stringify(rta));

});

//Ruta para recuperar contraseña
router.post('/recoveraccount', async (req, res) => {

  const { email } = req.body;
  const {xappid} = req.headers

  console.log("-----DATOS RECIBIDOS-----")
  console.log("email: " + email);
  console.log("xappid: " + xappid);

  var rta_recover = {
    msg: "Mail de recuperacion enviado"
  }
  res.send(JSON.stringify(rta_recover));

});


module.exports = router;
