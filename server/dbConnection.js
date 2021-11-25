const mongoose = require("mongoose");

// Connecting to database
mongoose.connect(
  "mongodb+srv://klaus:NTt6_6fqUwU4kBz@cluster0.mwojn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: { type: String },
  status: { type: String },
});

const Todos = mongoose.model("Todos", TodoSchema);

module.exports = {
  Todos,
};
