
// varable
let myName: string;
let age: number

// array
let isBoo: true
let contries:string[] = []
contries.push('Luanda')
contries.push('London')
contries.push('Leeds')
console.log(contries)

//union types
let mix:(string | number)[] = []
mix.push(8)
mix.push('england')
let mynew: number|string
mynew = 8
console.log(mynew)
console.log(mix)
// objects
let mixe: object
mixe = {name: 'jo' , age: 85}
console.log(mixe)

// any
let ano: any = 12
ano = true
console.log(ano, '========Boolean========')
ano = 'april'
console.log(ano, '======String======')
ano = ['banana', 'apple', 'orange']
console.log(ano, '====Array====')
ano =  {name:'jemol', age:9, job: 'student'}
console.log(ano, '========Object=========')