const express = require('express');

const router = express.Router();
const homeController = require('../controllers/event_controller');
router.get('/', homeController.home);
// router.get('/events-create', homeController.create )
router.post('/events-create', homeController.createEvent);
router.get('/user-events', homeController.userEvent)
router.get('/admin-events', homeController.allEvents)
router.get('/event-upload', homeController.uploadEvent)

module.exports = router;