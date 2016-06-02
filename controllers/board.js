/**
 * todo-api-server
 * Board Controller
 *
 * @author Jasper Valero <contact@jaspervalero.com>
 * https://github.com/jaspervalero/node-api-starter
 */
const Board = require( '../models/board' );

exports.create = function( req, res, next ) {
	const user_id = req.body.user_id;
	const title = req.body.title;
	let board;

	// Handle missing email or password
	if ( ! user_id || ! title ) {
		return res.status( 422 ).send({
			error: 'You must provide a user_id and title.'
		});
	}

	// Create new board
	board = new Board({
		user_id,
		title
	});

	// Save board to DB
	board.save( function( err ) {
		if ( err ) { return next( err, board ); }

		res.json({ board });
	});
}