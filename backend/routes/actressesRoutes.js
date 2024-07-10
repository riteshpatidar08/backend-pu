const express = require('express');

const router = express.Router();
const actressesController = require('../controllers/actressesController');

router.post('/createActresses', actressesController.createActresses);
router.get('/allActresses', actressesController.getAllActresses);
router.get('/actressesbynationality', actressesController.getActressesNation);
router.get('/getActressesByAwards', actressesController.getActressesByAwards);
module.exports = router;
