// FUNÇÃO!!!!!

let x = "nada";
console.log(x)
x = "oi"
y = "tchau"

// DECLARAÇÃO DE FUNÇÃO 

imprimeTexto(y)

// 1) DECLARA A FUNÇÃO 

function imprimeTexto(texto){
    console.log(texto)
}

// 2) CHAMAR OU EXECUTAR FUNÇÃO 

imprimeTexto(x);
imprimeTexto("Eu sou aluna");

function soma(){
    return 2 + 2
}

console.log(soma())
imprimeTexto(soma())
imprimeTexto(somaDeNumeros(4,7))
imprimeTexto(somaDeNumeros(24,11))

function somaDeNumeros(numero1, numero2){
    return numero1 + numero2
}

function nomeIdade(nome, idade){
    return`Meu nome ${nome} e minha iade é ${idade}`
}
// a ordem dos parametros é imprtante!!
imprimeTexto(nomeIdade("kauani", 18))
imprimeTexto(nomeIdade(17, "André"))

imprimeTexto(multiplicacao())
// voce pode definir um parametro inicial para sua função 
function multiplicacao(numero4 = 2, numero5 = 5){
    return numero4 * numero5
}
imprimeTexto(multiplicacao(somaDeNumeros(3,4) ,soma(5,10)));