const me = {
    name: 'Jelson J',
    age: 32,
    gender: 'male',
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    },
};
console.log(me);
// import invoice
import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('renata', 'work on the new project', 352);
const invTwo = new Invoice('nadal', 'won new game', 452);
let invoice = [];
invoice.push(invOne);
invoice.push(invTwo);
invoice.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
//console.log(form.children)
//input
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
