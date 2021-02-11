// import invoice
import {Invoice} from  './classes/Invoice.js'
import {Payment} from  './Intercafe/Payment.js'
import {HasFormatter} from './Intercafe/HasFormatter.js'
import { ListTemplate } from './classes/ListTemplate.js';


// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('jeje', 'tester', 350)
// docTwo = new Invoice('geny ramos', 'tennis player', 150)


// let docs: HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)


// const invOne = new Invoice('renata', 'work on the new project', 352)
// const invTwo = new Invoice('nadal', 'won new game', 452)

// let invoice: Invoice[] = []
// invoice.push(invOne)
// invoice.push(invTwo)

// invoice.forEach(inv => {
// console.log(inv.client, inv.amount, inv.format())
// })

const form = document.querySelector('.new-item-form') as HTMLFormElement
//console.log(form.children)

//input
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement


// list template
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event)=>{
  e.preventDefault()

  let doc: HasFormatter
  if(type.value === 'invoice'){
  doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  }else{
  doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }

  list.render(doc, type.value, 'end')
  //console.log(doc)
})









