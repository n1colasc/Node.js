const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
        try{
            let salida = '';
            let consola = '';

            for (let i = 1; i <= hasta; i++) {
                salida += `${base} x ${i} = ${base * i}\n`;
                consola += `${base} ${colors.red('x')} ${i} ${colors.blue('=')} ${base * i}\n`;
            }

            if(listar){
                console.log('============='.yellow)
                console.log('Tabla del:', colors.magenta(base))
                console.log('============='.yellow)   
                console.log(consola)
            }

            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)         
            return `tabla-${base}.txt`;
        }
        catch( err ){
            console.log(err)
        }
    }

    module.exports = {
        crearArchivo
    }