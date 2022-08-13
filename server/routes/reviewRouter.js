const express = require('express')
const router = express.Router()
const {postIdeas} = require('../controller/ideaController')
const {getIdeas} = require('../controller/ideaController')

router.route('/').post(postIdeas).get(getIdeas)

module.exports = router
