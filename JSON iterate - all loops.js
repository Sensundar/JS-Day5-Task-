/* For the given JSON iterate over all for loops(for, for in, for of, forEach)  */

let XMLHttpRequest = require('xhr2'); //require the library xhr2
let xhr = new XMLHttpRequest();  //create an object to the XMLHttpRequest class
xhr.open('GET', 'https://restcountries.com/v3.1/all'); //open the connection.
//handle the response data
xhr.onload = function(){
    let data = JSON.parse(xhr.responseText);
    dataSize = data.length;
/*-------------------------------------------------------------*/    
    //iterate 'name'  using for loop
    for (let i=0; i<dataSize; i++){
        //console.log(data[i].name);
    }
    //iterate 'tld' of country from JSON using for loop
    for (let i=0; i<dataSize; i++){
       // console.log(data[i].tld);
    }
    //iterate 'independent status' of country from JSON using for loop
    for (let i=0; i<dataSize; i++){
        countryName = data[i].name.common;
        //console.log(`${countryName}  :`, data[i].independent);
    }
 /*-------------------------------------------------------------*/ 
    //iterate 'currencies' using for in loop//
    for (let key in data)
    {
        //console.log(data[key].currencies);
    }
    //iterate 'capital' using for in loop
    for (let key in data){
        countryName = data[key].name.common;
        let capitalName = data[key].capital
        //console.log(`${countryName}  :`,capitalName );
    }
    //iterate 'region' using for in loop
    for (let key in data){
        countryName = data[key].name.common;
        //console.log(`${countryName}:`, data[key].region);
    }
/*-----------------------------------------------------------------*/
    //iterate 'capital' using for... of loop
        for (let details of Object.entries(data)){
        countryName = details[1].name.common;
        //console.log(`${countryName}:`, details[1].capital);
    }
    //iterate 'languages' using for ... of loop
        for (let details of Object.entries(data)){
            countryName = details[1].name.common;
            //console.log(`${countryName}:`, details[1].languages);
        }
    //iterate 'population' using for ... of loop
        for (let details of Object.entries(data)){
            countryName = details[1].name.common;
            //console.log(`${countryName}:`, details[1].population);
        }
/*------------------------------------------------------------------*/
        //iterate 'capital' using forEach loop
        let dataArray = Object.entries(data);
        function capitalDisplay(dataArray){
            countryName = dataArray[1].name.common;
            //console.log(`${countryName}:`,dataArray[1].timezones)
        }
        dataArray.forEach(capitalDisplay);

        //iterate 'continents' using forEach loop
        let continents = (dataArray) => {
            countryName = dataArray[1].name.common;
            //console.log(`${countryName}:`,dataArray[1].continents)
        }
        dataArray.forEach(continents);
        //iterate 'lattitude langitude' using forEach loop
        let latLng = (dataArray) => {
            countryName = dataArray[1].name.common;
            console.log(`${countryName}:`,dataArray[1].latlng)
        }
        dataArray.forEach(latLng);
        

        
}
xhr.send();

