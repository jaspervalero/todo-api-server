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

exports.read = function( req, res, next ) {
	const card_id = req.params.card_id;

	Card.find({ _id: card_id }, function( err, card ) {
		if ( err ) { return next( err ); }

		res.json({ card });
	});
};

exports.update = function( req, res, next ) {
	const card_id = req.body.card_id;
	const board_id = req.body.board_id;
	const title = req.body.title;
	const description = req.body.description;
	const assignee = req.body.assignee;
	const due_date = req.body.due_date;
	let updatedCard = {};

	if ( board_id ) {
		updatedCard.board_id = board_id;
	}

	if ( title ) {
		updatedCard.title = title;
	}

	if ( description ) {
		updatedCard.description = description;
	}

	if ( assignee ) {
		updatedCard.assignee = assignee;
	}

	if ( due_date ) {
		updatedCard.due_date = due_date;
	}

	Card.findOneAndUpdate({ _id: card_id }, updatedCard,
		function( err, user ) {
			if ( err ) { return next( err ) ; }

			res.json({ success: 'Card updated!' });
		});
};

exports.delete = function( req, res, next ) {
	const card_id = req.params.card_id;

	Card.remove({ _id: card_id }, function( err ) {
		if ( err ) { return next( err ); }

		res.json({ success: 'Card deleted!' });
	});
};

exports.readAll = function( req, res, next ) {
	const board_id = req.params.board_id;

	Card.find({ board_id }, function( err, cards ) {
		if ( err ) { return next( err ); }

		res.json({ cards });
	});
};