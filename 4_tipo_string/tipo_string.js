var nome = 'Douglas';
console.log(typeof nome);

var sobreNome = 'Proglima';
console.log(typeof sobreNome);

//Funções String
console.log(nome.length);

//Comparar duas Strings
nome === 'Douglas';
console.log(nome);

//Índice
var m = 'Bem vindo a selva 1; Bem vindo a selva 2; Bem vindo a selva 3;';
console.log(m.indexOf('selva'));

//Próximo Índice
console.log(m.lastIndexOf('a'));

//Se não encontrar o índice
console.log(m.indexOf('F')); //Retorna -1

//Substring
console.log(m.substring(0, m.indexOf(';')));

//Parte da String com slice, a diferença é que pode contar de trás para frente
console.log(m.slice(-m.length, m.indexOf(';')));

//subStr - Diferença que o segundo parâmetro é qtde de caractere enquanto que o substring o segundo parametro é a posição
console.log(m.slice(m.indexOf(';'), m.length));

//replace
var msg = 'Seja bem vindo <malaca>';
msg = msg.replace('<malaca>', 'Douglas');
console.log(msg);

//charAt mostra o caractere que está em uma determinada posição
console.log(msg.charAt(0));
//console.log(msg.reverse();