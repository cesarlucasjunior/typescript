//Função nomeada:
function usandoAForca(nome) {
    console.log("Use a forca " + nome);
}
usandoAForca('César Júnior');
//Função anônima:
var caminhoFacil = function (pace) {
    return pace < 12;
};
var pace = 14;
'Template String - ECMA 2015:';
console.log("O pace de " + pace + " \u00E9 mais f\u00E1cil? " + (caminhoFacil(pace) ? 'YES' : 'NO'));
//Arrow function:
var fazLigacao = function (destinatario) { return console.log("Fazendo liga\u00E7\u00E3o para " + destinatario + "..."); };
fazLigacao('César Júnior');
var somaNumeros = function (numeroA, numeroB) { return numeroA + numeroB; };
console.log(somaNumeros(3, 3));
//Parâmetros padrões em typescript:
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc 5,1 - " + inc(5, 1));
console.log("inc 5,1 - " + inc(5));
//Funções com parâmetros REST:
function somaJedis() {
    var jedis = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        jedis[_i] = arguments[_i];
    }
    return jedis.reduce(function (a, b) { return a + b; }, 0);
}
console.log(somaJedis(3, 4, 5, 1, 2));
