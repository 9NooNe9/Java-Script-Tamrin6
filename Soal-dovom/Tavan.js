const exponent = (baseNumber, power) => {
    if (typeof power !== 'number' || typeof baseNumber !== 'number' || power < 0 || power % 1 !== 0)
        return 'Plz fix your input :)'
    if (power === 0)
        return 1
    return exponent(baseNumber,power-1) * baseNumber
}

console.log(exponent(true,3))
console.log(exponent(8,0))
console.log(exponent(5,-3))
console.log(exponent(-10,4))
console.log(exponent(5,5))
