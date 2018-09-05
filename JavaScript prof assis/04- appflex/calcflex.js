/**
 * JS- Aula5: Calculadora Flex
 */

var etanol, gasolina;

function calcular(){
    etanol = parseFloat(frmFlex.txtEtanol.value.replace(",","."));//parseFloat responsavel de pegar a variavel e transformar em tipo numerico
                                            //replace troca um caracter, nesse caso ele troca os "," que o usuario digitar por "."
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."));
                                            
    if(etanol < 0.7 * gasolina ){
            document.getElementById("status").src="img/etanol.jpg";
            
    }else{
        document.getElementById("status").src="img/gasolina.jpg";
    }


}
function resetar(){
    document.getElementById("status").src="img/neutro.jpg";
}