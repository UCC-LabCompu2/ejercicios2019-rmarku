function test_ej_listas(){
    if(checkQuery("ul", 1) &&
        checkQuery("ol", 1) &&
        checkQuery("li", 19) &&
        checkQuery("ul li", 12) &&
        checkQuery("ol li", 7)){
        alert("Ejercicio Correcto!!!")
    }

}

/**
 * Chequea la cantidad de Tag o Query y verifica que coincidan con las que deberia haber
 * @method checkQuery
 * @param tagOrQuery
 * @param quantityToCheck
 * @return true or false
 */
function checkQuery(tagOrQuery, quantityToCheck) {
    var realQuantity;

    realQuantity = document.querySelectorAll(tagOrQuery).length;

    if(realQuantity != quantityToCheck){
        alert("Verifique la tag o query "+tagOrQuery);
        return false;
    }
    else{
        return true;
    }
}

function verificarPagina(array) {
    console.log(array.length);

}