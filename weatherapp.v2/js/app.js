let btnInput;
let apiCity;

window.addEventListener("load", () => {
    btnInput = document.querySelector("icon");
    apiCity = document.querySelector("input");
    
    const search = async () => {
        
        if(apiCity.value == ""){
            return alert("Por favor ingrese la ciudad que desea indagar.");
        } else {
            const apiKey = "496ec11446a320cfd88f0a941ebc287d";
            let apiCity = document.querySelector("input").value;
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${apiCity}&appid=${apiKey}&units=metric`;
            const response = await fetch(apiUrl);
            let data = await response.json();



            // cambios de datos y transiciones

            const _weather = document.querySelector(".img")
            let time = document.querySelector(".invisible");

            time.classList.remove("visible");
            
            setTimeout(() => {

                switch (data.weather[0].main) {
                    case "Clear":
                        _weather.src = "images/clear.png"
                        break;
                    case "Clouds":
                        _weather.src = "images/clouds.png"
                        break;
                    case "Drizzle":
                        _weather.src = "images/drizzle.png"
                        break;
                    case "Mist":
                        _weather.src = "images/mist.png"
                        break;
                    case "Rain":
                        _weather.src = "images/rain.png"
                        break;
                    case "Snow":
                        _weather.src = "images/snow.png"
                        break;
                }

                document.querySelector(".celcius").innerHTML = `${Math.round(data.main.temp)}°C`;
                document.querySelector(".city").innerHTML = `${data.name}`;
                document.querySelector(".country").innerHTML = ` - ${data.sys.country}`;

                time.classList.add("visible");
            }, 300);
    
    
        }
        
    }
    
    btnInput?.addEventListener("click", search);
});




