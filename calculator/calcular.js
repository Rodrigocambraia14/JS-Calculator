function insert(num){
    var numero = document.getElementById('resultado').value;
    document.getElementById('resultado').value = numero + num;
}

function clean(){
    document.getElementById('resultado').value = "";
}

function back(){
    var resultado = document.getElementById('resultado').value;
    document.getElementById('resultado').value = resultado.substring(0, resultado.length - 1);
}

function calcular(){
    var resultado = document.getElementById('resultado').value;

    if(resultado)
    {
        document.getElementById('resultado').value = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').value = "";
    }        
}

document.addEventListener('keypress', function(e){

    if(e.which == 13){
       calcular();
    }
 }, false);
