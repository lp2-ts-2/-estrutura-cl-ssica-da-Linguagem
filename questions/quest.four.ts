//  Leia um valor inteiro N. 
//  Este valor será a quantidade de valores inteiros X que serão lidos em seguida. 
//  Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão fora do intervalo, 
//  mostrando essas informações conforme exemplo (use a palavra "in" para dentro do intervalo, 
//  e "out" para fora do intervalo).

function calcInterval() {
    let vec: any = [5, 14, 123, 10, -25, 32];
    let min = 10;
    let max = 20;
    let inValue:any = [];
    let outValue:any = [];

    for(let i = 0; i < vec.length; i++) {
        if(vec[i] >= min && vec[i] <= max) {
            inValue.push(i);
        } else if(vec[i] < min && vec[i] > 0 || vec[i] > max ) {
            outValue.push(i);
        }
    }

    return `${inValue.length} in\n${outValue.length} out`
}

console.log(calcInterval());