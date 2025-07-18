const intersection = (arr1: number[], arr2: number[]): number[] => {

    let a: number[] = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                let k = 0;
                while (k < a.length) {
                    if (arr1[i] === a[k])
                        break;
                    else
                        k++
                }
                if (k == a.length)
                    a.push(arr1[i])
            }
        }
    }
    return a
}
let array1: number[] = [1, 2, 5, 7, 9, 13]
let array2: number[] = [7, 97, 58, 7, 0, 13, 5, 2, 2]

console.log(intersection(array1, array2))

