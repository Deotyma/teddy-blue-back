import express  from "express";
import Item from "../models/Item.js";
import { 
  createItem,
  deleteItem,
  getAllItems,
  getItemById,
  updateItem,
 } from "../controllers/itemControllers.js";

const router = express.Router();

router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);
router.get("/:id", getItemById)
router.get("/", getAllItems)

export default router