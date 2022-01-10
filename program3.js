let number = [2, 5, 10]

for(let j = 0; j<number.length; j++)
    for(let i = 1; i<=12; i++){
        console.log("%d*%d = %d", number[j], i, number[j]*i)
    }