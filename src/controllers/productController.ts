import { Request, Response } from 'express';
import { ProductsRepository } from '../repositories/ProductsRepository';

const productRepository = new ProductsRepository();

export class productController {
    create(req: Request, res: Response): void{
        const product = productRepository.create(req.body);
        res.status(201).json(product);
    };

    list(req: Request, res: Response): void{
        const product = productRepository.list();
        res.status(200).json(product);

    };

    update(req: Request, res: Response){
        const product = productRepository.update(req.body);
        res.status(200).json(product);
    }

    remove(req: Request, res: Response){
        const product = productRepository.remove(req.params.id);
        res.status(200).json({message: "Product deleted"});
    }

}