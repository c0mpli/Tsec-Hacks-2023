const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema ({
    logo:{
        type: String,
        required: true,
    },
    companyName:{
        type: String,
        required: true,
    },
    jobTitle:{
        type: String,
        required: true,
    },
    jobDescription:{
        type: String,
        required: true,
    },
    pay:{
        type: Number,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Jobs", jobSchema);