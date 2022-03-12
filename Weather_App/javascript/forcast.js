
const key = 'NKJYO0CbGA9sSsU07qHBFGl0QHD9LM99'

const getCity = async (city)=>{

    const baseURL= 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(baseURL + query); 
    const data = await response.json();
    return data[0]
    // console.log(data)
}

getCity('karachi')
// 

const getWeather = async (id)=>{
    const baseURL= 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`;
    const response = await fetch(baseURL + query); 
    const data = await response.json();
    // console.log(data)
    return data[0]
}

getWeather('261158')

































