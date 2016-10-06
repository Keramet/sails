/**
 * RoutingController
 *
 * @description :: Server-side logic for managing routings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    home: (req, res) => {
        res.view('homepage');
    },

    data: (req, res) => res.json({
         "data": { 
             "text": "Our awesome text!",
             "value": 123,
             "is": true
        }
    })
	
};

