import { HasFormatter } from '../Intercafe/HasFormatter';

export class ListTemplate {
  
constructor(private container: HTMLUListElement){}
render(item: HasFormatter, heading: string, post: 'start' | 'end') {
const li =document.createElement('li')
const h4 = document.createElement('h4')
h4.innerText = heading
li.append()

const p = document.createElement('p')
p.innerText = item.format()
li.append(p)

if(post === 'start'){
  this.container.prepend(li)
}else{
  this.container.append(li)
}
}
}