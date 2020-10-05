# EzCard servidor de prueba
API para desarrollo

Rutas:
------
/user
/entry
/cards
/turnos


Rutas user
=================
POST /user/login [devulve json con userid y token]

GET /user/login/{userid} [devuelve el id recibido]

POST
/user/signin [devulve json con userid y token]

GET
/user/{userid} [devuelve json con todos los datos del usuario]

PUT
/user/{userid} [devuelve el pin recibido en el body, y el pin y el token recibidos en el header]


