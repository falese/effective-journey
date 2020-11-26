const mongoose = require('mongoose')

const Document = mongoose.model(
    "Document",
    new mongoose.Schema({
        category:{
            type: String
        },   
        fileId:{
            type:mongoose.Schema.Types.ObjectId
        },
        doc:{
            data: Buffer,
            contentType: String
        }
    })
)
module.exports = Document