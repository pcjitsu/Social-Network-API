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
    
    }
)