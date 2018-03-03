var puppies = require("../models/puppylist.js");

module.exports = function(app) {

	app.get("/api/puppies", function(req, res){
		res.json(puppies);
	});

    app.post("/api/puppies", function(req, res){
         if()

    }


}