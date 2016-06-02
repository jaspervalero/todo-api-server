/**
 * todo-api-server
 * Card Controller
 *
 * @author Jasper Valero <contact@jaspervalero.com>
 * https://github.com/jaspervalero/node-api-starter
 */
const Card = require( '../models/card' );

exports.create = function( req, res, next ) {
	const board_id = req.body.board_id;
	const title = req.body.title;
	const description = req.body.description;
	const assignee = req.body.assignee;
	const due_date = req.body.due_date;
	let card;

	// Handle missing board_id or title
	if ( ! board_id || ! title ) {
		return res.status( 422 ).send({
			error: 'You must provide a board_id and title.'
		});
	}

	// Create new card
	card = new Card({
		board_id,
		title,
		description,
		assignee,
		due_date
	});

	// Save card to DB
	card.save( function( err ) {
		if ( err ) { return next( err, card ); }

		res.json({
			card
		});
	});
};