let namePilot = prompt("Qual o seu nome piloto?")
let velocity = 0
let newVelocity = prompt("Qual velovidade gostaria de acelerar piloto?")

let confirmVelocity = confirm ("Confirma a velocidade de " + newVelocity + " km/s?")

if(newVelocity){
    velocity = newVelocity
}

if(velocity <=0){
    alert("Nave está parada, considere aumentar a velovidade")
}else if(velocity <=40){
    alert("Você está devagar, podemos aumentar mais")
}else if (velocity >=40 && velocity < 80) {
    alert("Parece uma boa velocidade para manter")
}else if (velocity >= 80 && velocity < 100) {
    alert("Velocidade alta, considere diminuir")
}else{
    alert("Velocidade perigosa. Controle automático forçado")
}

alert("O nome do piloto é " + namePilot + " e a sua velocidade é " + velocity + "km/s")