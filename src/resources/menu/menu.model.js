const mongoose = require( 'mongoose' )

const menuSchema = mongoose.Schema({
    menu_name:{
        type : String,
    }
	
} )

const Menu= mongoose.model( 'menu', menuSchema )

module.exports = Menu