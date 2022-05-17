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
    const updateItem = await Item.findByIdAndUpdate(
      req.params.id, 
      {$set: req.body},
      {new: true})
    res.status(200).json(updateItem)
    
  } catch (err) {
    res.status(500).json(err)
  }
})
//DELETE
router.delete("/:id", async(req, res)=>{
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(200).json("Item has been delated")
    
  } catch (err) {
    res.status(500).json(err)
  }
})
//GET
router.get("/:id", async(req, res)=>{
  try {
    const item = await Item.findById(req.params.id);
    res.status(200).json(item)
    
  } catch (err) {
    res.status(500).json(err)
  }
})
//GET ALL
router.get("/", async(req, res)=>{
  try {
    const items = await Item.find(req.params.id);
    res.status(200).json(items)
    
  } catch (err) {
    res.status(500).json(err)
  }
})


export default router