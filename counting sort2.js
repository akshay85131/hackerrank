function countingSort(arr) {
 let counter = new Array(arr.length).fill(0)
    let result = []
    for (let value of arr) {
        counter[value] += 1
    }
    let index = 0
    for (let value of counter) {
        result.push(...Array(value).fill(index))
        index += 1
    }

    return result
}