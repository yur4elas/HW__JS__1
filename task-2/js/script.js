var term = {
    Canada: 10,
    Germany: 13,
    Spain: 22,
}
const arr = Object.entries(term)

console.log(term)

console.log('количество стран ' + arr.length)

function sum(obj) {
    let res = 0
    for (let key in obj) {
        res += obj[key]
    }
    return res
}

console.log('средняя температура равна = ' + (sum(term) / arr.length))

function maxValue(obj) {
    let max = 0

    for (let key in obj) {
        max = max < obj[key] ? obj[key] : max
    }
    return max

}

console.log('максимальная температура равна = ' + maxValue(term))