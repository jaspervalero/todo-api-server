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
};

exports.read = function( req, res, next ) {
	const board_id = req.params.board_id;

	Board.find({ _id: board_id }, function( err, board ) {
		if ( err ) { return next( err ); }

		res.json({
			board
		});
	});
};

exports.update = function( req, res, next ) {
	const board_id = req.body.board_id;
	const title = req.body.title;

	// Handle missing title
	if ( ! title ) {
		return res.status( 422 ).send({
			error: 'You must provide an updated title.'
		});
	}

	Board.findOneAndUpdate({ _id: board_id }, { title },
		function( err, user ) {
			if ( err ) { return next( err ); }

			res.json({
				success: 'Board updated!'
			})
		});
};