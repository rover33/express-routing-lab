var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = [{id: 1, name: 'butterfinger', color: 'brown'},
			   {id: 2, name: 'jawbreaker', color: 'rainbow'},
			   {id: 3, name: 'nerds', color: 'purple'}
			]

//What would need to go into candies
//in order to pass our first test?
//INDEX
router.get('/', function(req,res) {
	res.json(candies)
	// What would go here? 
	// Hint: we want all candies in JSON format
});
//SHOW
router.get('/:id', function(req,res){
	res.send(candies[req.params.id -1])
})

//Create
router.post('/', function(req,res){
	candies.push(req.body)
	res.send(req.body)
	res.send(candies)
})

//UPDATE

router.put('/:id', function(req,res){
	res.send(candies[req.params.id -1] = (req.body))
	res.send(candies)
})

//DELETE
router.delete('/:id', function(req,res){
	candies[req.params.id -1] = null
	res.send('You are the weakest link. Goodbye')
	res.send(candies)
})



module.exports = router;