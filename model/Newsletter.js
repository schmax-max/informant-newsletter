'use strict'
const mongoose = require('mongoose');
const {createModels} = require('./createModels')

const schema = new mongoose.Schema( {
    _type: {
        type: "string"
    },
    _id: {
        type: "ObjectId"
    },
    name: {
        type: "string"
    },
    source_url: {
        type: "string"
    },
    created_at: {
        type: "date",
        format: "date-time"
    },
    boolean: {
        type: "object"
    },
    process_flags: {
        type: "object"
    },
    filtering: {
        type: "object"
    },
    archive: {
        type: "object"
    }
})

schema.set('toJSON', { virtuals: true });

const collections = [
    'podcasts',
    'others',
]

module.exports = createModels ('newsletter', schema, collections)
