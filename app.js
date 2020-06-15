const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=1baca5065eb735f478a8e79dea78b061&query=13.0827'

request({ url: url, json: true }, (error, response) => {
    if (error)
     {
        console.log('Unable to connect Internet')
    }
    else if (response.body.error) 
    {
        console.log("Unable find the location")
    }
    else 
    {
    console.log(response.body.current.weather_descriptions[0] + ". Its currently"+ response.body.current.temperature + "degrees out. It feels like" + response.body.current.feelslike + "degrees out.")
    }
})  
