
const passport    = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    bcrypt        = require('bcryptjs');


    passport.serializeUser( (user, done) => done(null, user.id) );

    passport.deserializeUser( (id, done) => {
        User.findOne( {id: id}, (err, user) => done(err, user) );
    });

    passport.use( new LocalStrategy(
        { usernameField: 'email',
          passwordField: 'password' },

        (email, password, done) => {
            User.findOne( {email: email}, (err, user) => {
                if (err)   { return done(err); }
                if (!user) { 
                    return done(null, false, { message: 'No user with such email!' });
                }

                bcrypt.compare( password, user.password, (err, isMatch) => {
                    console.log(`bcrypt.copmare - isMatch: ${isMatch}.`);
                    if ( !isMatch ) { return done(null, false, { message: 'Wrong password!' }); }

                    let userInfo = { email: user.email,
                                        id: user.id     };
                    return done(null, userInfo, { message: 'Login successful... ' });
                }); 
            });
        }
    ));