import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },

      item_id: {
        type: Srting,
      },
    
      user_id: {
        type: String,
        required: true,
      },
    
      corespondingUser_id: {
        type: String,
        required: true, 
      },
    
      creationDate: {
        type: Date,
        required: true, 
      },
     
});

export default mongoose.model("Message", MessageSchema)