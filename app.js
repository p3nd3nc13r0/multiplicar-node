const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e))
        break;
    default:
        console.log('Comando no reconocido');
}

//console.log(argv);

//let base = '6';

//let argv2 = process.argv;

//console.log(argv.base);
//console.log('limite', argv.limite);

//console.log(argv2);

/* let parametro = argv[2];

let base = parametro.split('=')[1]; */

/* crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e)) */