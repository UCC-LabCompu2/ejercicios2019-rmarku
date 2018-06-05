function test_ej_listas(){
    var cantUL,cantOL,cantLI,cantULli,cantOLli;

    cantUL=document.getElementsByTagName("ul").length;
    cantOL=document.getElementsByTagName("ol").length;
    cantLI=document.getElementsByTagName("li").length;

    cantULli=document.querySelectorAll("ul li").length;
    cantOLli=document.querySelectorAll("ol li").length;

    if(cantOL==cantUL==1 && cantLI==20 && cantULli==7 && cantOLli==13){
        alert("Ejercicio Correcto!!!")
    }
    console.log(cantUL);
    console.log(cantOL);
    console.log(cantULli);
    console.log(cantOLli);
}