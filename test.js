const request = require('request')

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/madurai.json?access_token=pk.eyJ1IjoidmVua2ltYW5pYW4iLCJhIjoiY2o2a2hoaXAyMGhnYTMycGRxYm9wNGdiMiJ9.YbP9P_gKt7IvLVuvZlwIEA'

request({ url: url, json : true }, (error, response) => {
    
    if (error)
    {
        console.log("Unable to connect internet")
    }
    else if(response.body.features.length === 0)
    {
        console.log("Unable to find the location")
    }
    else 
    {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude)
    const request = require('request')

const geocodeurl = 'http://api.weatherstack.com/current?access_key=1baca5065eb735f478a8e79dea78b061&query=13.0827'

request({ url: geocodeurl, json: true }, (error, response) => {
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

    
     }
})