
export function reformDate (arr)  {
    return arr.prices.map((item) => item[0]).map(item => new Date(item).toLocaleDateString('en-US'))
}

export function unboxPrice (arr) {
    return arr.prices.map((item) => item[1])
}
