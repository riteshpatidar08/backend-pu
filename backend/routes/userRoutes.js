const express = require('express') ;
const userController = require('./../controllers/userController')
const router = express.Router() ;
const upload = require('./../middleware/upload');

router.post('/register',upload.single('image'), userController.registerUser) 
router.post('/login' ,userController.login)

module.exports = router;