import { Router } from "express";
import { productController } from "../controllers/productController";

const routes = Router();

routes.get("/products", new productController().list);

routes.post("/products", new productController().create);

routes.put("/products", new productController().update);

routes.delete("/products/:id", new productController().remove)

export { routes };