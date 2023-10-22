const { Schema, model, Types } = require('mongoose');

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
        usernmae:{
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
        usernmae:{
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
    }
)


thoughtSchema.virtual('reactionCount').get(() => {
    return this.reactions.length
})

const thought = model('thought', thoughtSchema)

module.exports = thought;