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
}else if(forma ==="triangulo"){
    area = (altura * comprimento) / 2
} else{
    console.log("deveria ser uma ")
}

console.log(area)

// const -> ultilizada para criar variaveis que são fixas, e não se alteram
// condições booleanas (truly ou falsy)
// 0 = false
// 1 = true

const usuarioLogado  = true;
const contaPaga = false;

console.log(0 == false);// true
console.log(contaPaga == 0)//true
console.log(contaPaga === 0)//false
console.log("" == false);//true
console.log(1 == true);//true

// nule e indefinido
// nulo -> vazio ou nada

let kauani;
let vitor = null;
let numeroDois = 3;
let texto = "eu gosto de programação <3"

console.log(typeof kauani);
console.log(typeof vitor);
console.log(typeof numero);
console.log(typeof texto);

//conversão de variável

const numeroNumber = 390;
const numeroString = "390"

console.log(numeroNumber == numeroString)// compara apoenas o valor
console.log(numeroNumber === numeroString)// compara tambem o tipo
console.log(numeroNumber + numeroString)// concatenação
console.log(numeroNumber + Number(numeroString))// soma de número

