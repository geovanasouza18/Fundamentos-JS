// const senha = prompt("Digite a senha para acessar o cofre: ")

// if(senha ==="12345"){
//     alert("Pode acessar o cofre!")
// }else{
//     alert("Acesso negado!")
// }

const HourCrime = Number(prompt("Digite o horário do crime: "))
if(HourCrime >=0 && HourCrime <= 5){
    alert("O crime aconteceu na madrugada")
}else if(HourCrime >= 6 && HourCrime <= 11) {
    alert("O crime aconteceu pela manhã")
}else if(HourCrime >= 12 && HourCrime <= 17) {
    alert("O crime aconteceu pela tarde")
}else{
    alert("O crime aconteceu à noite")
}