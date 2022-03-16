import { Request, Response } from 'express';
import { Products } from '../models/Products';

const products: Products[] = [];

export class productController {
    create(req: Request, res: Response): void{
        products.push(req.body);

        res.status(201).json(products);
    }

    list(){

    }

    update(){

    }

    delete(){

    }

}