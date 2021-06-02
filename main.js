var cityName = document.getElementById('city-name');
var searchButton = document.getElementById('search-button');
var cityResult = document.getElementById('city-result');
var countryName = document.getElementById('country-name');
var cityTemp = document.getElementById('city-temp');
var cityAir = document.getElementById('city-air');






searchButton.addEventListener('click' , function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName.value + ' &appid=8585b54703ac9ae5d0081093a2d217f8&units=metric' )
        .then(response => response.json())
        
        .then(data => {
            // console.log(data)
            // console.log(data['name'])
            // console.log(data['main']['temp'])
            // console.log(data['weather'][0]['description'])
            // console.log(data['sys']['country'])
            var cName = data['name']
            var cTemp = data['main']['temp']
            var cAir = data['weather'][0]['description']
            // var coun = data['sys']['country']


            cityResult.innerText = cName;
            cityTemp.innerText = cTemp;
            cityAir.innerText = cAir;



        })
        
        .catch(error => alert("something is wrong 404"))
    
})







        