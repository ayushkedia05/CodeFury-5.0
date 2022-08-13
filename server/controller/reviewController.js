// const { cookies } = require('../client/src/components/places.tsx');
const Hospital = require('../models/hospitalModel')

// const value = cookies.get('location');
//Get All Products

const getReviews = async (req, res) => {
// const data = req.body;
const hospital = await Hospital.find({})

// const hospital = await Hospital.findOne({name: new RegExp('^'+name+'$', "i")}, function(err, doc) {
//     //Do your action here..
//   });

    res.status(200).json({
            success: true,
            hospital
    });
}


module.exports = getReviews;
