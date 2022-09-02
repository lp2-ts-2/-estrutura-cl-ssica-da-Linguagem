//  Ler um número inteiro N e calcular todos os seus divisores.

let x : number = prompt("digite um valor");
let i : number;
for(i=x;i>=1;i--){
    
    if(x % i == 0){
        console.log(i)
    }
}
