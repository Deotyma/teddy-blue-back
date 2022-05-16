import mongoose from "mongoose";
const ItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },

  age: {
    type: String,
    required: true,
  },
  
  photos: {
    type: [String],
  },

  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  user_id: {
    type: String,
    required: true,
  },

  creationDate:{
    type: Date,
    required: true, 
  }

});

export default mongoose.model("Item", ItemSchema)