/**
 * todo-api-server
 * Board Model
 *
 * @author Jasper Valero <contact@jaspervalero.com>
 * https://github.com/jaspervalero/node-api-starter
 */
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

// Define Board model
const boardSchema = new Schema({
	user_id: String,
	title: String
});

// Create and export ModelClass
const ModelClass = mongoose.model( 'board', boardSchema );
module.exports = ModelClass;