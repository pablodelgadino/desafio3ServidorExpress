const fs = require('fs');

class Contenedor {
    constructor(){
    }
    read(file){
        let allProductsArray = [];
        try{
            allProductsArray = fs.readFileSync(file, 'utf8');
            allProductsArray.length > 0 ? allProductsArray = JSON.parse(allProductsArray): allProductsArray = [];
        }catch(err){
            console.log('Error en la lectura del archivo', err);
        }
        return allProductsArray;
    }
}

module.exports = Contenedor;