//  Fazer um programa para ler um número inteiro positivo N. 
//  O programa deve então mostrar na tela N linhas, começando de 1 até N. 
//  Para cada linha, mostrar o número da linha, 
//  depois o quadrado e o cubo do valor, conforme exemplo.

let n : number = prompt("digite um numero") ;
let i : number;

for(i = 1; i <= n; i++){

 console.log(i,i*i,i*i*i);


}
