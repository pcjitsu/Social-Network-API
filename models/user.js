const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema(
    {
        usnername:{
            type: String,
            unique: true,
            required: true,
            trim: true,

        },
        email:{
            type: String,
            required: true,
            unique: true,
            match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/],
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }],
        friends:[{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    
    }
)


userSchema.virtual('friendCount').get(() => {
    return this.friends.length
})

const User = model('User', userSchema)

module.exports = User;

