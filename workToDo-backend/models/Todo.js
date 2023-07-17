const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const todoSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        },
        ticket:{
            type: Number,
        }
    },
    {
        timestamps: true
    }
)


// todoSchema.plugin(AutoIncrement, {
//     inc_field: 'ticket',
//     id: 'ticketNums',
//     start_seq: 500,
//     reference_fields: ['user'] 
// })

module.exports = mongoose.model('Todo', todoSchema)