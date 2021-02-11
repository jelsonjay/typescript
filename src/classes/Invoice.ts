import {HasFormatter} from '../Intercafe/HasFormatter.js'
//class
export class Invoice implements HasFormatter{
  // readonly client:  string;
  // private details: string;
  // public amount: number;
  
  // constructor
  constructor(
  readonly client: string,
  private details: string,
  public amount: number,
  ){}
  
    format(){
    return `${this.client} owed £${this.amount} for ${this.details}`
    }
  }