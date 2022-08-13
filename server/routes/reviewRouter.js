const express = require('express')
const router = express.Router()
const review =  require("../controller/reviewController.js")

router.get("/", review)

module.exports = router
