const mongoose = require( 'mongoose' )

const itemSchema = mongoose.Schema({
    item_qty:{
        type : Number,
    }
	
} )

const Item= mongoose.model( 'item', itemSchema )

module.exports = Item