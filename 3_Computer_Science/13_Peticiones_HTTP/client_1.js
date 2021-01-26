const request =  require('request');


const getHazardousAsteroids = (startDate,endDate) => {
    const APIKey = "exU2yB0uiZJfIDSSEKwQBqKSynbgiNNOSugiUz3b";
    const nasaURL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${APIKey}`;
    request.get(nasaURL,(err, response, body) => {
        if (response.statusCode === 200) {
            const json = JSON.parse(body);
            console.log(`There's been ${json.element_count} nearby objects:`)
            const dates = Object.keys(json.near_earth_objects);
            dates.forEach(date => {
                json.near_earth_objects[date].forEach(asteroid => {
                    const name = asteroid.name;
                    const magnitude = asteroid.absolute_magnitude_h;
                    if (asteroid.is_potentially_hazardous_asteroid === true) {
                        var isHazardous = "is";
                    } else {
                        var isHazardous = "is not";
                    }
                    console.log(`${name} with magnitude ${magnitude} ${isHazardous} hazardous.`)
                })
            });
        } else {
            console.log("There was an error. Response: ",response.statusCode);
        }
    })
}

getHazardousAsteroids("2020-11-26","2020-12-1");