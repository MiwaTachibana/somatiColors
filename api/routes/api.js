var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var usersController = require('../controllers/users.js');
var eventsController = require('../controllers/events.js');

router.route('/users/')
	.get(usersController.getUsers)
	.post(usersController.postUser)

router.route('/users/:id')
	.get(usersController.getUser)
	.delete(usersController.deleteUser)
	.put(usersController.putUser)
    
router.route('/users/:user_id/events')
	.get(eventsController.getEvents)
	.post(eventsController.postEvent)

router.route('/users/:user_id/events/:id')
	.get(eventsController.getEvent)
	.delete(eventsController.deleteEvent)
	.put(eventsController.putEvent)

module.exports = router