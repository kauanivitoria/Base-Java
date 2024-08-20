// var  ->criando uma variavel 

//var altura = 5;
//var comprimento = 8;

 //var area = altura * comprimento;
//console.log(area)

// let -> (criar uma variavel forma mais atualizada de criar uma variavel)

let altura = 5;
let comprimento = 8;
let forma = "retangulo"
let area;

if(forma === "reatngulo"){
    area = altura * comprimento
}else{
    area = (altura * comprimento) / 2
}

console.log(area)

// const -> ultilizada para criar variaveis que são fixas, e não se alteram
// condições booleanas (truly ou falsy)
// 0 = false
// 1 = true

const usuarioLogado  = true;
const contaPaga = false;

console.log(0 == false);
console.log(contaPaga == 0)
console.log(contaPaga === 0)