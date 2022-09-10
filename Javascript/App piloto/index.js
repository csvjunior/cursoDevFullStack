let dateEntry = prompt("Digite a data de partida (DD/MM/YYYY)")

let dateNew = moment(dateEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - dateEntry

let option = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2-Minutos\n3-Hora\n4-Dias")

if (option == "1") {
    let secounds = Math.round(dateDiff /1000)
    alert("Tempo de viagem: " + secounds + " segundos")
}else if (option == "2") {
    let minutes = Math.round(dateDiff /1000 /60)
    alert("Tempo de viagem: " + minutes + " minutos")
}else if (option == "3") {
    let hour = Math.round(dateDiff /1000 /3600)
    alert("Tempo de viagem: " + minutes + " horas")
}else if (option == "4") {
    let days = Math.round(dateDiff /1000 /3600 /24)
    alert("Tempo de viagem: " + days + " dias")
}else{
    alert("Opção invalida")
}