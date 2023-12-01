const arr = [1, 2, 5, -2, -745, -123, 0]

function bubbleSort(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; i < arr.length; j++) {
            if (arr[j + 1] < arr[j]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}


console.log(bubbleSort(arr))