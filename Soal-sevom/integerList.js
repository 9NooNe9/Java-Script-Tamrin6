//                    Finding integers in an Array

let defaultArray = [[[5], 3], 0, 2, ['foo'], [], [4, [5.1, 6]]]

const integerCounter = (Array, result) => {
    if (toString.call(Array) !== "[object Array]")
        return 'please check your input again'
    for (let element of Array) {
        if (typeof element === "number" && element % 1 === 0) {
            result += 1;
        }
        if (toString.call(element) === "[object Array]") {
            result = integerCounter(element, result)
        }
    }
    return result
}

console.log(integerCounter(defaultArray, 0))