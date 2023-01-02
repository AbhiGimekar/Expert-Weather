const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_real_value = document.getElementById("temp_real_value");

const datahide = document.querySelector(".middle_layer");



const getInfo = async (event) => {
    event.preventDefault();
    let cityValue = cityName.value;

    if(cityValue === ""){
        city_name.innerText = "Please Enter The City Before Search !!!";
        datahide.classList.add("data_hide");
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=5814f3d867e055290f897df2962e65cc`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const arrData = [data];

            city_name.innerText = `${arrData[0].name},  ${arrData[0].sys.country}`;
            var temp = arrData[0].main.temp;
            temp -= 273.15;
            temp = Number.parseFloat(temp).toFixed(2);
            temp_real_value.innerText = temp;
            // temp_status.innerText = arrData[0].weather[0].main;

            // Condition To Check Sunny Or Cloudy
            const tempMood = arrData[0].weather[0].main;
            if(tempMood === "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
            else if(tempMood === "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            } 
            else if(tempMood === "Rain"){
                temp_status.innerHTML = "<i class='fas fa-rain' style='color:#a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }

            datahide.classList.remove("data_hide");
        }
        catch{
            city_name.innerText = "Please Enter The City Name Properly";
            datahide.classList.add("data_hide");
        }
    }


}

submitBtn.addEventListener("click", getInfo);