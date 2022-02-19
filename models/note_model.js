const mongoose = require("mongoose");
const schema = mongoose.Schema;

const noteSchema = new schema(
  {
    __v: { type: Number, select: false},
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    
   
  },
  { collection: "note" }
);


module.exports = mongoose.model("note", noteSchema);
