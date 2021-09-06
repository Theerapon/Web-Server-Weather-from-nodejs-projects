const request = require('postman-request');

// // Geocoding
// // Address -> Lat/Long -> Weather

const geocode = (address, callback) => {

    const url = `http://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoidGhlZXJhcG9ubmFub2kxODUiLCJhIjoiY2tzdmp3cHIwMDZ0MjJ1cnd6OTR4YWh1aiJ9.cvM36CjtVK_X1sM800wInA&limit=1`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            const errorMessage = 'Unable to connect to location service'
            callback(errorMessage, undefined)
        } else if (body.features.length === 0) {
            const errorMessage = 'Unable to find location. Try again'
            callback(errorMessage, undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode