const mongoose = require("mongoose")
const toastedSchema = mongoose.Schema({
Itemname: {
    type: String,
    minLenght :4   
 },
Quantity: Number,
price: {
    type: String,
    minLenght:5
}
})
module.exports = mongoose.model("toasted",
toastedSchema)
