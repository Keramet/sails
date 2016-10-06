
module.exports = (req, res, next) => {
    // if( req.isAuthenticated() ) {
    //     return next();
    // } else {
    //     return res.forbidden('User is not authenticated.');
    // }
    return req.isAuthenticated() ? next()
                                 : res.forbidden('User is not authenticated.');
}