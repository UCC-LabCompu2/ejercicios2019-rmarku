/**
 * Verifica las tag en el ejercicio de Listas
 * @method test_ej_listas
 */
function test_ej_listas(){
    var array=[
        ["ul", 1],
        ["ol", 1],
        ["li", 19],
        ["ul li", 12],
        ["ol li", 7]
    ];

    verificarPagina(array);

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

/**
 * Verifica todas las TAG en la Pagina
 * @method verificarPagina
 * @param array
 */
function verificarPagina(array) {
    var resp;

    for(var i=0; i < array.length; i++){
        resp = checkQuery(array[i][0], array[i][1]);

        if(!resp)
            return;
    }
    alert("Ejercicio Correcto!!!");

}