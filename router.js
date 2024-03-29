/**
 * node-api-starter
 * Boilerplate code for a Node.js API Server.
 *
 * @author Jasper Valero <contact@jaspervalero.com>
 * https://github.com/jaspervalero/node-api-starter
 */
const passport = require( 'passport' );

const Authentication = require( './controllers/authentication' );
const passportService = require( './services/passport' );
const Board = require( './controllers/board' );
const Card = require( './controllers/card' );

/**
 * Create auth helpers, which disable Passport's default cookie
 * based sessions in favor of JWTs.
 */
const requireAuth = passport.authenticate( 'jwt', { session: false });
const requireSignin = passport.authenticate( 'local', { session: false });

module.exports = function( app ) {

	// Index route
	app.get( '/', requireAuth, function( req, res ) {
		res.send({ success: true });
	});

	// Signup route
	app.post( '/signup', Authentication.signup );

	// Signin route
	app.post( '/signin', requireSignin, Authentication.signin );

	// Boards routes
	app.post( '/boards', Board.create );
	app.get( '/boards/:board_id', Board.read );
	app.put( '/boards', Board.update );
	app.delete( '/boards/:board_id', Board.delete );
	app.get( '/boards/all/:user_id', Board.readAll );

	// Cards routes
	app.post( '/cards', Card.create );
	app.get( '/cards/:card_id', Card.read );
	app.put( '/cards', Card.update );
	app.delete( '/cards/:card_id', Card.delete );
	app.get( '/cards/all/:board_id', Card.readAll );

};