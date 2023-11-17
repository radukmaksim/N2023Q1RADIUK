x = [1,2,5,12]
a = [12,21,52,125]
s = [13,24,54,128]

const fullArray = [x, a, s]

function multiply(array){
    result = [ ]
        for(fIndex = 0; fIndex < array.length; fIndex++)
            
                for(inIndex=0; inIndex < array[fIndex].length; inIndex++)
                {
                    result.push(array[fIndex][inIndex] * 2)
                }
    return result
}

console.table(multiply(fullArray))