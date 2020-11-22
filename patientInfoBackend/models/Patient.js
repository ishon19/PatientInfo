/* eslint-disable no-undef */
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const url = process.env.MONGODB_URI;
console.log("The connection URL is", url);

mongoose
  .connect(url, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => console.log("Error connecting to the database: ", error));

const patientSchema = mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  age: {type: Number, required: true},
  gender: {type: String, required: true},
  contact: { type: Number, required: true, minlength: 10, unique: true },
  address: {type: String, required: true}
});

patientSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

patientSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Patient", patientSchema);
