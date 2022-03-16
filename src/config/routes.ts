import { Router } from "express";
import { productController } from "../controllers/productController";

const routes = Router();

routes.get("/products", (req, res) => {
    return res.status(200).json({messsage: "Lukinha gay"})
})

routes.post("/products", new productController().create);

export { routes };