const x = [1,2,3]

function divide(array)
    {
        const result = [ ]
            for(fIndex = 0; fIndex < array.length; fIndex++)
            {
                result.push(array[fIndex] / 2)
            }
            return result
    }
    console.table(divide(x))