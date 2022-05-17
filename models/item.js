import mongoose from "mongoose";
const ItemSchema = new mongoose.Schema(
    {
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
  exchange: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    required: true,
  },

  user_id: {
    type: String,
    required: true,
  },

},
  { timestamps: true }
);

export default mongoose.model("Item", ItemSchema)