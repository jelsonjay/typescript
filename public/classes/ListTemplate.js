export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, post) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append();
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (post === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
