function calcFatorial() {
    let inp: number = 0;
    let result: number = inp;

    if(inp === 0) {
        return inp = 1;
    }

    for(let i = 1; i < inp; i++) {
        result *= i;
    }

    return result;
}

console.log(calcFatorial());