/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function saludar() {
    alert("Hola MUNDOOO!");
}

function convertir(id_elem, valor_elem) {
    if (isNaN(valor_elem)) {
        alert("El valor de " + id_elem + " debe ser numerico.");
        document.getElementById(id_elem).value = "";
    }

    if (!isNaN(valor_elem)) {
        if (id_elem == 'metro') {
            document.getElementById("pulgada").value = valor_elem * 39.3701;
        }
        if (id_elem == '') {

        }
    }
}

/** Función que convierte entre metros,yardas, pulgadas y pies
 * @method convertir2
 * @param unidad
 * @param valor
 * @return null
 */
function convertir2(unidad, valor) {
    valor = valor.replace(",", ".");

    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido en " + unidad);
        document.conv.unid_yarda.value = "";
        document.conv.unid_metro.value = "";
        document.conv.unid_pulgada.value = "";
        document.conv.pie.value = "";
    } else if (unidad == "metro") {
        document.conv.unid_pulgada.value = Math.round(valor * 39.3701 * 100) / 100;
        document.conv.unid_pie.value = Math.round(valor * 3.28084 * 100) / 100;
        document.conv.unid_yarda.value = Math.round(valor * 1.09361 * 100) / 100;
    } else if (unidad == "pulgada") {
        document.conv.unid_metro.value = Math.round(valor * 0.0254 * 100) / 100;
        document.conv.unid_pie.value = Math.round(valor * 0.08333 * 100) / 100;
        document.conv.unid_yarda.value = Math.round(valor * 0.027778 * 100) / 100;
    } else if (unidad == "pie") {
        document.conv.unid_metro.value = Math.round(valor * 0.3048 * 100) / 100;
        document.conv.unid_pulgada.value = Math.round(valor * 12 * 100) / 100;
        document.conv.unid_yarda.value = Math.round(valor * 0.333333 * 100) / 100;
    } else if (unidad == "yarda") {
        document.conv.unid_metro.value = Math.round(valor * 0.9144 * 100) / 100;
        document.conv.unid_pulgada.value = Math.round(valor * 36 * 100) / 100;
        document.conv.unid_pie.value = Math.round(valor * 3 * 100) / 100;
    }
}

function blanquear(id_elem, valor) {
    if (isNaN(valor)) {
        document.getElementById(id_elem).value = "";
    }
}

function suma() {
    //document.opMat.sum_total.value = Number(document.opMat.sum_num1.value) + Number(document.opMat.sum_num2.value);
    document.getElementById("totalS").innerHTML = Number(document.opMat.sum_num1.value) + Number(document.opMat.sum_num2.value);
}

function conv_Grados_Rad(id_elem, valor) {
    if (id_elem == "grados") {
        document.getElementById("radianes").value = valor * Math.PI / 180;
    }
    if (id_elem == "radianes") {
        document.getElementById("grados").value = valor * 180 / Math.PI;
    }
}

function des_a_parecer(valor) {
    if (valor == 'val_mostrar') {
        document.getElementById("unDiv").style.display = 'block';
    }
    if (valor == 'val_ocultar') {
        document.getElementById("unDiv").style.display = 'none';
    }
}

function dibujo() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000";

    //fillRect(x, y, width, height)
    ctx.fillRect(0, 15, 20, 25);

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
}

function dibujarCuadriculado() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000";

    ctx.beginPath();
    for (var i = 10; i < canvas.width; i = i + 10) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
    }

    for (var j = 10; j < canvas.height; j = j + 10) {
        ctx.moveTo(0, j);
        ctx.lineTo(canvas.width, j);
    }
    ctx.stroke();
}


var intervalo;
var x;
var b;
var a;

function linea(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    // borro el canvas
var y;
    y = a * x + b;
    console.log({x,y});
    x++;

    ctx.fillStyle = "#0072ff";
    ctx.fillRect(x, y, 3, 3);
}

function seno(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    // borro el canvas
    var y;
    y = math.sin(x/10)*canvas.height;
    console.log({x,y});
    x++;

    ctx.fillStyle = "#0072ff";
    ctx.fillRect(x, y, 3, 3);

}

function dibujar() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    // borro el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dibujarCuadriculado();
    linea();
    seno();

    if (x > canvas.width) {
        clearInterval(intervalo);
    }
}

function animar() {
    var canvas = document.getElementById("myCanvas");
    x = 0;
    a = -1* canvas.height/canvas.width;
    b = canvas.height;
    intervalo = setInterval(dibujar, 33)
}


function rect_cir() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#244aaf";
    ctx.beginPath();
    ctx.rect(10, 10, 30, 30);
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = "#af3679";
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}
