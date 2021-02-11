//class
export class Invoice {
    // readonly client:  string;
    // private details: string;
    // public amount: number;
    // constructor
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owed £${this.amount} for ${this.details}`;
    }
}
