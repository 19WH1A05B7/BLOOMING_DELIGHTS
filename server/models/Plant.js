const MONGOOSE = require('mongoose');

const STRING = MONGOOSE.Schema.Types.String;
const DATE = MONGOOSE.Schema.Types.Date;
const NUMBER = MONGOOSE.Schema.Types.Number;
const OBJECT_ID = MONGOOSE.Schema.Types.ObjectId;

const PLANT_SCHEMA = MONGOOSE.Schema({
    title: { type: STRING, required: true },
    product_category: { type: STRING, required: true },
    vendor: { type: STRING, required: true },
    description: { type: STRING, required: true },
    cover: { type: STRING, required: true },
    price: { type: NUMBER, required: true },
    creationDate: { type: DATE, default: Date.now },
    currentRating: { type: NUMBER, default: 0 },
    ratingPoints: { type: NUMBER, default: 0 },
    ratedCount: { type: NUMBER, default: 0 },
    ratedBy: [{ type: OBJECT_ID, ref: 'User' }],
    purchasesCount: { type: NUMBER, default: 0 },
    comments: [{ type: OBJECT_ID, ref: 'Comment' }]
});

PLANT_SCHEMA.index({
    title: 'text',
    vendor: 'text'
});

const PLANT = MONGOOSE.model('Plant', PLANT_SCHEMA);

module.exports = PLANT;