//1 задание
for(i = 0; i <= 10; i++){
    if (i == 0){
        console.log('0 - это ноль')
    }else if(i >= 2 && i % 2 == 0){
        console.log(`${i} - четное число`)
    }else{
        console.log(`${i} - нечетное число`)
    }
}
//2 задание
let arr = [1, 2, 3, 4, 5, 6, 7]
let newArr = arr.filter(num => num !== 4 && num !== 5)
console.log(newArr)

//3 задание
arr1 = []
for(i = 0; i <= 5; i++){
    arr1.push(Math.floor(Math.random() * 10))
}
console.log(arr1)
let sum = 0
for(i = 0; i < arr1.length; i++){
    sum += arr1[i]
}
console.log(`Сумма: ${sum}`)
let min = Math.min(...arr1)
console.log(`Минимальное значение в массиве - ${min}`)
let three = arr1.includes(3)
console.log(`Наличие числа 3 в массиве: ${three}`)
//4 задание
for(i = 0; i<=20; i++){
    console.log('x' * Number(i))
}