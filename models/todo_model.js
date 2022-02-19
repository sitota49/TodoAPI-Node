const mongoose = require("mongoose");
const schema = mongoose.Schema;

const todoSchema = new schema(
  {
    __v: { type: Number, select: false},
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
        type: Date
    },
    time: {
        type: Number
    },
    status: {
      type: String,
      required: true,
    },

   
  },
  { collection: "Todo" }
);


module.exports = mongoose.model("Todo", todoSchema);
