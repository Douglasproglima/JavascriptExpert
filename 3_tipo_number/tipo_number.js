var valor = 0.3 - 0.2;
console.log(valor);

var precoVenda;

precoVenda = 10 * 0.5522;
precoVenda.toFixed();
console.log(precoVenda);

//Número Infinito
var i = 10/0;
console.log(i);
console.log(typeof i);

//Menos Infinito
var y = -10/0;
console.log(y);
console.log(typeof y);

//NaNumber
var z = 10/'Proglima';
console.log(z);
console.log(typeof z);

//isNaN() retorna true ou false
if(isNaN(z)){
	console.log(z +' é um número válido');
}else{
	console.log(z +' não é um número válido');
}

//Teste NaN
var y = 10 / '2';
console.log(y);
console.log(typeof y);