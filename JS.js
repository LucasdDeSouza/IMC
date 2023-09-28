 function calculo() {
    const peso = document.getElementById(`pesovalor`).value;
    const altura = document.getElementById(`alturavalor`).value;
    altura.replace(".",".");

    const imc = (peso / (altura * altura)).toFixed(2)
    let mensagem = "";
     
    if (altura == "") {
        alert(`Informe o valor da altura`)
    }
    else if (peso == ""){
        alert(`Informe o valor peso`)
    }
    else {

        if(imc < 18.5){
            mensagem = mensagem + `Você está abaixo do peso`
        }
        else if (imc <= 24.9) {
            mensagem = mensagem + "Peso Normal"
        }
        else if (imc <= 29.9) {
            mensagem = mensagem + "Sobrepeso"
        }
        else if (imc <= 34.9) {
            mensagem = mensagem + "Obesidade Grau I"
        }
        else if (imc <= 39.9) {
            mensagem = mensagem + "Obesidade Grau II"
        }
        else {
            mensagem = mensagem + "Obesidade Mórbida"
        }

        document.getElementById("resul").value = imc
        document.getElementById("Class").value = mensagem

    }
 }

 function limpar() {
    document.getElementById("resul").value = ""
    document.getElementById("Class").value = ""
    document.getElementById("pesovalor").value = ""
    document.getElementById("alturavalor").value = ""
 }