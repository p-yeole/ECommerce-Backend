import Express from "express";

const productsRouter = Express.Router();
//productsRouter.post("/",validateProduct, addNewProduct);
productsRouter.post("/", createProduct); //step1: add product, step2: validate
productsRouter.get("/", getAllProducts);
productsRouter.get("/:id", getProductsById);
productsRouter.get("/:name", getProductsByName);
productsRouter.get("/:category", getProductsByCategory); //get by category

export default productsRouter;
