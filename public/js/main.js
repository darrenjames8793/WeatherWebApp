const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');

const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');


const getInfo = async(event) =>{
      event.preventDefault();
       let cityVal = cityName.value;
       

      if(cityVal=="")
      {
         city_name.innerText = `Please enter a city name`;
         document.querySelector(".data_hide").style.visibility="hidden";
        }
        else
        {
            try{
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=f580018675fe725e90126f568b8c8b45`;
                const response = await fetch(url);
                const data = await response.json();
                const arrData = [data];
               
                document.querySelector(".data_hide").style.visibility="visible";

                city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
                temp.innerText = `${((arrData[0].main.temp)/10).toFixed(2)}°C`;
                // temp_status.innerText = arrData[0].weather[0].main;
              
                const tempChk = arrData[0].weather[0].main;
                //condition to check weather status
                 if (tempChk == "Sunny") {
                    temp_status.innerHTML =
                      "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
                  } else if (tempChk == "Clouds") {
                    temp_status.innerHTML =
                      "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
                  } else if (tempChk == "Rain") {
                    temp_status.innerHTML =
                      "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
                  } else {
                    temp_status.innerHTML =
                      "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
                  }

            }
            catch{
                city_name.innerText = `Please enter the city name properly`;
                document.querySelector(".data_hide").style.visibility="hidden";
                
        }
      }
}

submitBtn.addEventListener('click', getInfo)