const cityForm = document.querySelector('.city-form')
const icon = document.querySelector('.icon')
const card = document.querySelector('.card')

const updateCity = async (city) => {
    const cityDetails = await getCity(city)
    const weather = await getWeather(cityDetails.Key)
    return { cityDetails, weather }
}

cityForm.addEventListener('submit', e => {
    e.preventDefault();
    
    card.classList.remove('d-none')
    const city = cityForm.city.value.trim();
    cityForm.reset();
    scrollTo(0,500)
    updateCity(city).then(data => updateUI(data)).catch(err => console.log(err))
    
})

const time = document.querySelector('.time')
const details = document.querySelector('.details')

const updateUI = (data) => {
    const { cityDetails, weather } = data;

  

    details.innerHTML = `
    <h1 class="my-2"> ${cityDetails.EnglishName} </h1>
    <div class="my-3"> ${weather.WeatherText} </div>
    <div class="display-4 my-1"> ${weather.Temperature.Metric.Value} <span>&deg;C</span> </div> 
    `
    
    let timesource = null;
    if (weather.IsDayTime) {
        timesource = './images/day.svg'
    } else{
        timesource = './images/night.svg'
    }

    time.setAttribute('src',timesource);

    let iconSource = `./images/icons/${weather.WeatherIcon}.svg`

    icon.setAttribute('src', iconSource)
    // iconSource.setAttribute('src',iconSource)
}   
















