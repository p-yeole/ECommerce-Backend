import Express from "express";
import { getOrderById, getOrdersByUserId } from "./orders.controller.js";

const ordersRouter = Express.Router();
ordersRouter.get("/:transactionId", getOrderById);
ordersRouter.get("/:userId", getOrdersByUserId);
// ordersRouter.post("/", placeOrder); //save order
export default ordersRouter;
