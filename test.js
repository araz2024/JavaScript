function findBigNumbers(massiv) {
    let result = [];
    for (let i = 0; i < massiv.length; i++) {
        if (massiv[i] > 100) { // Заменил massiv на massiv[i] и исправил условие
            result.push(massiv[i]);
        }
    }
    return result;
}

let massiv = [100, 500, 700, 200, 300];
let netice = findBigNumbers(massiv);
console.log(netice);
