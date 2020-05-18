//Tipada desde o início:
let nome:string
nome = 'César Lucas Júnior'
console.log('Meu nome é: ' + nome);

let idade:number = 25
console.log('Minha idade é ' + idade)

let casado:boolean = false
console.log('É casado? ' + casado)

//Settando o tipo diretamente:
let sobrenome = "Lucas"

console.log('Sobrenome solteiro: ' + sobrenome);

//Arrays:

//Forma natural:
let listaNomes:string[] = ['Cesar', 'João', 'Maria']
console.log('Lista de nomes: ' + listaNomes);

//Objeto:
let idadeEnvolvidos:Array<number> = [15,24,37]
console.log('Idade dos envolvidos: ' + idadeEnvolvidos);

//Direta
let numerosEmOrdem = [1,2,4,5]
console.log('Número em ordem: ' + numerosEmOrdem)

//Podemos ter também variáveis "sem tipo" ou por padrão - any
let nomeDoNumero
nomeDoNumero = 3 +3 
console.log('Nome do número: ' + nomeDoNumero)
nomeDoNumero = '3' + 3
console.log('Nome do número: ' + nomeDoNumero)