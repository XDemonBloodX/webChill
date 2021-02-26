const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const avisSchema = new Schema({
    objet: {
        type: String
    },
    avis: {
        type: String
    },
    ip: {
        type: String
    },
}, {
    timestamps: true
});

let Avis = mongoose.model("Avis", avisSchema);
module.exports = Avis;