// Выполнить сложение различных типов(string+boolean, string+number, number+boolean)

let str = "string"
let num = 100
let booleanValue = true

let op1 = str + booleanValue
let op2 = str + num
let op3 = num + booleanValue

console.log(op1, op2, op3)

// Выполнить умножение различных типов(string * boolean, string * number, number * boolean)

let op4 = str * booleanValue
let op5 = str * num
let op6 = num * booleanValue
console.log(op4, op5, op6)

//Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
let op7 = str/booleanValue
let op8 = str/num
let op9 = num/booleanValue
console.log(op7,op8,op9)

//Выполнить явное преобразование(number, string, boolean)
// Convertion to String
let conv1 = num.toString()
let conv2 = booleanValue.toString()

// convertion to Number
let conv3 = Number(str)
let conv4 = Number(booleanValue)

// convertion to bool
let conv5 = Boolean(str)
let conv6 = Boolean(num)

console.log(conv1, conv2,conv3, conv4, conv5, conv6)