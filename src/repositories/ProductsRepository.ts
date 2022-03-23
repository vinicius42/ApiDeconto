import { Products } from "../models/Products";

const products: Products[] = [];

export class ProductsRepository{
    
    create(product: Products): Products[]{
        products.push(product);
        return products;
    };

    list(): Products[]{
        return products;
    };

    update(product: Products): Products[]{
        const findProduct = products.findIndex(prod => prod.name === product.name);
        
        products[findProduct] = product;
        
        return products;
    };
    
    remove(name: string): Products[]{
        const prodIndex = products.findIndex(prd => prd.name === name);

        if (prodIndex === -1){
            console.log("Pedro gay")
        };

        products.splice(prodIndex, 1);

        return products;

    }
}