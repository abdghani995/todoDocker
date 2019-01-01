var mongoose = require("mongoose");
var todoSchema = new mongoose.Schema({
    content: { type: String, required: true },
    created: { type: Date, default: Date.now },
    pics: { type: String }
});

module.exports = mongoose.model('Todo', todoSchema);