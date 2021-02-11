
// ======function type in typescrip=======
let greet = () => {
console.log('greet function')
}
greet()

let myFunction: Function

myFunction = () => {
console.log('call function')
}
myFunction()
// using option param ?
// param inside function
const add = (a: number, b: number, c: string | number = 5) =>{
  console.log(a + b)
  console.log(c)
}

add(4, 10, '10')


const min = (a:number, b:number): number => {
  return a + b
}
 let  result = min(10, 5)

 console.log(result)
