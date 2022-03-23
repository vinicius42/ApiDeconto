import { v4 as uuidv4 } from 'uuid';

export class Products{
    id?: string;
    name: string;
    description: string;
    quantity: number;
    price: number;

    constructor(){
        if(!this.id){
            this.id = uuidv4();
        };
    }
}