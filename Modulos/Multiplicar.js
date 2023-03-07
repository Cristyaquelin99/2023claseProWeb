const fs = require("fs");
const color = require("colors")
const crearArchivo  =async (base =1) =>{
    let salida = "";
    salida +=`Tabla de multiplicar del ${base}\n`.blue;
    for (let i = 0; i <= 10; i++) {
        salida +=`${base} x ${i} = ${base*i}\n`.rainbow;
    }






    console.log(salida);
    fs.writeFileSync(`Tabla-${base}.txt`, salida);


}




module.exports = {
    crearArchivo:crearArchivo
}


