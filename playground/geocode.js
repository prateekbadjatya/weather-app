const request = require('request');
var geocodeAddress = (address,callback) => {
var enocodedAddress = encodeURIComponent(address);
request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=${enocodedAddress}',
    json: true
},(error,response,body) => {
    if(error){
        callback('unable to connect to the google server');
    } else if (body.status ===  'ZERO_RESULTS'){
        callback('unable to find address');
    }else if(body.status ===  'OK'){
          /*  console.log(response);
              console.log(JSON.stringify(body,undefined,10)) //Pretty Printing Object
              console.log(`Address:${body.results[0].formatted_address}`);//1301 lombard street philadelphia
          */
           callback(undefined, {
               address: body.results[0].formatted_address,
               lattitude: body.results[0].geometry.location.lat,
               Longitude: body.results[0].geometry.location.lng
           });
    }
});
};
module.exports.geocodeAddress = geocodeAddress;
//1194a0c0c47941dc500495d985dec4f1
//https://api.darksky.net/forecast/[key]/[latitude],[longitude]
//39.9396284  lat
//-75.18663959999999  lon

//https://api.darksky.net/forecast/1194a0c0c47941dc500495d985dec4f1/39.9396284,-75.18663959999999