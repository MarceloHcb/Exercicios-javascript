function sumFunction(array) {
    let result = 0;

    for (let index = 0; index < array.length; index += 1) {
        result += array[index]
    }
    return result
}

console.log(sumFunction([1, 2, 3, 4, 5]));
console.log(sumFunction([10, 20, 30]));

function nbaChampion(lakers, celtics) {
    let countLakers = 0;
    let countCeltics = 0;

    for (let index = 0; index < lakers.length; index += 1) {
        if (lakers[index] > celtics[index]) {
            countLakers += 1
        } else {
            countCeltics += 1
        }
        if (countLakers > countCeltics) {
            return ("Lakers wins with " + countLakers + " Victories")
        } else if (countCeltics === countLakers) {
            return ("empate")
        }
        else {
            return ("Celtics Wins with " + countCeltics + " Victories")
        }
    }
}

console.log(nbaChampion([106, 98, 107], [108, 99, 110]))
console.log(nbaChampion([106, 98, 107], [108, 99, 110])) //?