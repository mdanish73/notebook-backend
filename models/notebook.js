const mongoose = require('mongoose')


const NoteModel = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
    },
    desc: {
        type: String,
        trim: true,
    }
})


module.exports = mongoose.model("notebook", NoteModel)