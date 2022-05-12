
const {crearArchivo} = require('./helpers/multiplicar');
require('colors');
const argv = require('./config/yargs');

const {base} = argv;
const {listar} = argv;
const {hasta} = argv;

crearArchivo(base, listar, hasta)
    .then(nombre => {console.log(`${nombre} creado!`.italic.green)})
    .catch(err => console.log(err));