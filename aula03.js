// alguns erros comuns

//const numero; 1 erro: não declarar uma constante


const minhaVar = "oi"// 2° erro: não declarar uma var e chamar no código;
console.log(minhaVar); // exemplo, chamar minhaVar com V minúsculo;

console.error("isso está errado") // 3° "Erro": Voce pode declarar um erro com console.error;

// condicional abreviada if (){}

let idadeMinima  = 18;
let idadeCliente = 18;

if(idadeCliente >= idadeMinima){
    console.log("cerveja")
}else{
    console.log("Nescau")
}

// valor ternário 
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco") 
// modo ternario, ultilizando a estrutura _____>=_______?_______:____________
// modo ternario, ultilizando a estrutura _____<=_______?_______:____________
// modo ternario, ultilizando a estrutura _____==_______?_______:____________

// template string

const nome = "kauani";
const idade = 18;
const cidadeNatl = "Foz do Iguaçu"

const apresentacao =  "Meu nome é" + nome + ", minha idade é" + idade + " e nasci em " +  cidadeNatl ;

console.log(apresentacao)

//template string
const apresentacao2 = `Meu nome é ${nome}, minha idade é ${idade} e minha cidadev natal é ${cidadeNatl}`
console.log(apresentacao2)