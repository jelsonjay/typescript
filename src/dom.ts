// Interfaces
interface IsPerson{
name: string;
age: number;
gender: string;
speak(a: string): void;
spend(a: number): number;
}

const me: IsPerson = {
  name: 'Jelson J',
  age: 32,
  gender: 'male',
  speak(text: string):void{
  console.log(text)
  },
  spend(amount: number): number{
  console.log('I spent' , amount)
  return amount
  },
}
console.log(me)


// import invoice
import {Invoice} from  './classes/Invoice.js'
import {Payment} from  './Intercafe/Payment'
import {HasFormatter} from './Intercafe/HasFormatter.js'

const invOne = new Invoice('renata', 'work on the new project', 352)

const invTwo = new Invoice('nadal', 'won new game', 452)

let invoice: Invoice[] = []
invoice.push(invOne)
invoice.push(invTwo)

invoice.forEach(inv => {
console.log(inv.client, inv.amount, inv.format())
})

const form = document.querySelector('.new-item-form') as HTMLFormElement
//console.log(form.children)

//input
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement


form.addEventListener('submit', (e: Event)=>{
  e.preventDefault()
  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  )
})









