/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const passport = require('passport');

module.exports = {

    _config: {
        actions:   false,
        shortcuts: false,
        rest:      false
    },

    login: (req, res) => {
        passport.authenticate( 'local', (err, user, info) => {
            if (err || !user) {
                return res.json({ message: info.message,
                                     user: user });
            }
            req.login( user, err => {
                if (err) { res.json( {error: err} ); }

                return res.json({ message: info.message,
                                     user: user });
            });
        })(req, res);
    },

    logout: (req, res) => {
        req.logout();
        res.redirect('/');
    }
	
};

