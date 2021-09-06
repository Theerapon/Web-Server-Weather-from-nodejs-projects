const request = require('postman-request');

// const weatherURL = 'http://api.weatherstack.com/current?access_key=f63922f5b5705a7d492d868b4a4e5713&query=37.8267,-122.4233&units=f'

// request({ url: weatherURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.feelslike + '% chance of rain')
//     }
// })

const forecast = (latitude, longitude, callback) => {
    
    const url = 'http://api.weatherstack.com/current?access_key=f63922f5b5705a7d492d868b4a4e5713&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            const errorMessage = 'Unable to connect to weather service!'
            callback(errorMessage, undefined)
        } else if (body.error) {
            const errorMessage = 'Unable to find location'
            callback(errorMessage, undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.feelslike + '% chance of rain')
        }
    })
}

module.exports = forecast