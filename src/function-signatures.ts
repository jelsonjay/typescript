
// example 1
let user1: Function 

// example 2
let user2: (a: string, b: string)=> void
user2 = (name: string, gender: string) =>{
  console.log(`${name} says ${gender}`)
}



// example 3
let date: (a: number, b:number, c:string) => number
date = (ageOne:number, ageTwo: number, action: string) => {
if(action === 'add'){
  return ageOne + ageTwo
}else{
  return ageOne - ageTwo
}
}

// example 4
let myDatails: (obj: {name:string, age:number, gender: string}) => void

type person = {name: string, age: number, gender: string}

myDatails = (obj: person) => {
console.log(`${obj.name} is ${obj.age} years old ${obj.gender}`)
}