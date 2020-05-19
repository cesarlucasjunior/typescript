//Função nomeada:
function usandoAForca(nome:string): void{
    console.log(`Use a forca ${nome}`)
}
usandoAForca('César Júnior')

//Função anônima:
let caminhoFacil = function(pace:number):boolean{
    return pace < 12
}

let pace = 14
'Template String - ECMA 2015:'
console.log(`O pace de ${pace} é mais fácil? ${caminhoFacil(pace) ? 'YES' : 'NO'}`)

//Arrow function:
let fazLigacao = (destinatario: string) => console.log(`Fazendo ligação para ${destinatario}...`)
fazLigacao('César Júnior')

let somaNumeros = (numeroA:number, numeroB:number) => numeroA + numeroB
console.log(somaNumeros(3,3));

//Parâmetros padrões em typescript:
function inc(speed:number, inc: number=1): number{
    return speed + inc
}

console.log(`inc 5,1 - ${inc(5,1)}`)
console.log(`inc 5,1 - ${inc(5)}`)

//Funções com parâmetros REST:
function somaJedis(...jedis:number[]):number{
    return jedis.reduce((a,b) => a+b,0)
}

console.log(somaJedis(3,4,5,1,2))