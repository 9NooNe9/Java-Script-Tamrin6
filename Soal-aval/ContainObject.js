//             function to find a value in a object

const demoObj = {
    d: {
        c: {
            b: {
                a: {
                    number: 20,
                    str: 'hi'
                }
            }
        }
    }
}

const contain = (Object, Value) => {
    for (let element in Object) {

        if (Object[element] === Value) {
            return true;
        }

        if (typeof Object[element] === 'object') {
            return contain(Object[element], Value)
        }
    }
    return false;
}

console.log(contain(demoObj, 'hi'))
console.log(contain(demoObj, 'agab'))
console.log(contain(demoObj, 20))