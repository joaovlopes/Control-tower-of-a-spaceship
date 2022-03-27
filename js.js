let txt

let velocity = 0

let newVelocity

let textDados

let option

let botoes = document.getElementsByName("radio")

function menu(){

    let optioninvalid = "Selecione uma opção valida!"
 
    if(option == undefined){
        option = optioninvalid
        document.getElementById("result").innerHTML = optioninvalid
    }
    
    let radioValue

    for(let i = 0; i <= 3; i++){
        if(botoes[i].checked === true){
            radioValue = botoes[i].value
        }
    }
    debugger
    switch(radioValue){
        case "1":
            velocity = this.acelerar(velocity)
            break;
        case "2": 
            velocity = this.desacelerar(velocity)
            document.getElementById("result").innerHTML = this.txt
            break;
        case "3":
            this.dados(velocity)
            document.getElementById("result").innerHTML = this.textDados
            break;
        case "4":
            this.clear()
            break;
    }

}

function acelerar (velocity){
    debugger
    newVelocity = velocity + 5
    this.txt = "A velocidade foi aumentada em 5km/s! A nova velocidade é de " + newVelocity + "km/s"
    document.getElementById("result").innerHTML = this.txt
    return newVelocity
}

function desacelerar(velocity){
    debugger
    newVelocity = velocity - 5 
    if (newVelocity < 0 ){
        newVelocity = 0
        this.txt = "A velocidade é de 0km/s! Se quiser partir, acelere!"
    }
    else {
        this.txt = "A velocidade foi diminuida em 5km/s! A nova velocidade é de " + newVelocity + "km/s"
    }
    return newVelocity  
}

function dados(velocity){
    let name = document.getElementById("nome").value
    this.textDados = "Espaçonave: " + name + " Velocidade: " + velocity + "km/s"
}

function clear(){
    document.getElementById("nome").value = ""
    document.getElementById("result").innerHTML = ""
    for(let i = 0; i <botoes.length; i++){
        botoes[i].checked = false;
    }
}




