const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionID: {
        type: Schema.Types.ObjectId,
        default: () => {
            new Types.ObjectId()
        },
    },
        reactionBody:{
            type: String,
            required: true,
            maxlength: 280,
        },
        username:{
            type: String,
            required: true,
        },
        createdAt:{
            type: Date,
            default: () => {
                new Date().toLocaleString()
            }

    },
    
    },
    {
        toJSON:{
            getters: true,

        },
        id: false,
        _id: false,
    }
)

const thoughtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            required: true,
            maxlength: 280,
        },
        createdAt:{
            type: Date,
            default: () => {
                new Date().toLocaleString()
            },
        },
        username:{
            type: String,
            required: true,
        },
        reactions: [reactionSchema],

    },
    {
        toJSON:{
            getters: true,
            virtuals: true,

        },
        id: false,
    }
)




thoughtSchema.virtual('reactionCount').get(() => {
    return this.reactions.length
})

const Thought = model('thought', thoughtSchema)

module.exports = Thought;