import express  from "express";
import Item from "../models/Item.js";

const router = express.Router();

//CREATE
router.post("/", async(req, res)=>{

    const newItem = new Item(req.body);
  
    try {
      const savedItem = await newItem.save();
      res.status(200).json(savedItem);
    } catch (err) {
     res.status(500).json(err)
    }

})
//UPDATE
router.put("/:id", async(req, res)=>{
  try {
    const updateItem = await Item.findByIdAndUpdate(req.params.id, {$set: req.body})
    res.status(200).json(updateItem)
    
  } catch (err) {
    res.status(500).json(err)
  }
})
//DELETE
//GET
//GET ALL

export default router