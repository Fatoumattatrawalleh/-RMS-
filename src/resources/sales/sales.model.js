const mongoose = require( 'mongoose' )

const saleSchema = mongoose.Schema({
    sale_date:{
        type : Date,
    }
	
} )

const Sale = mongoose.model( 'sale', saleSchema )

module.exports = Sale