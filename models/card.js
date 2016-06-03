/**
 * todo-api-server
 * Card Model
 *
 * @author Jasper Valero <contact@jaspervalero.com>
 * https://github.com/jaspervalero/node-api-starter
 */
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

// Define Card model
const cardSchema = new Schema({
	board_id: String,
	title: String,
	description: String,
	assignee: String,
	due_date: String
});

// Create and export ModelClass
const ModelClass = mongoose.model( 'card', cardSchema );
module.exports = ModelClass;