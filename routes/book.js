const express = require('express');
const router = express.Router();
const {create, getbyTitle, getByRater, updateBooks} = require('../controllers/book')

router.route('/book').post(create);

router.route('/book/:title').get(getbyTitle);

router.route('/ratingStatus/:username/:book').get(getByRater);

router.route('/rating/:username/:book/:rate').patch(updateBooks);

module.exports = router;