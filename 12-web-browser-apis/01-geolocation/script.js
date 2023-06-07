// getCurrentPosition() method

function curSuccess(position) {
    const coords = position.coords;
    console.log(`Latitude: ${coords.latitude}`);
    console.log(`Longitude: ${coords.longitude}`);
    console.log(`Accuracy: ${coords.accuracy} metres`);
}

function curError(error) {
    console.log(`Error: ${error.code} ${error.message}`);
}

const options = {
    enableHighAccuracy: true, // Use GPS if available
    timeout: 5000, // Time to wait to stop trying to get the location
    maximumAge: 0 // Do not use a cached location
};

// navigator.geolocation.getCurrentPosition(curSuccess, curError, options);

// watchPosition() method

const target = {
    latitude: 53.349804,
    longitude: -6.260310
}

function watchSuccess(position) {
    const coords = position.coords;
    console.log(`Latitude: ${coords.latitude}`);
    console.log(`Longitude: ${coords.longitude}`);

    if (target.latitude === coords.latitude && target.longitude === coords.longitude) {
        console.log('You have reached your destination');
        navigator.geolocation.clearWatch(watchId);
    }
}

function watchError(error) {
    console.log(`Error: ${error.code} ${error.message}`);
}

const watchOptions = {
    enableHighAccuracy: true, // Use GPS if available
    timeout: 5000, // Time to wait to stop trying to get the location
    maximumAge: 0 // Do not use a cached location
};

navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);