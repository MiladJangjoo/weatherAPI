const button1 = document.querySelector('.btn')
button1.addEventListener ('click', async() => {
    const result1 = getCityValue()
    console.log(result1)
    await apiCallCity(result1)
}) 





function getCityValue(){
    const inputValue = document.querySelector('.city').value
    return inputValue
}



async function apiCallCity(city) {
    const res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=36ae3916da5103001bce8463a352bcae`)
    if (res.ok){
        const data = await res.json()
        const high = (((data.main.temp_max - 273.15) * 9) / 5) + 32
        const low = (((data.main.temp_min - 273.15) * 9) / 5) + 32
        const humidity = data.main.humidity
        const forecast = data.weather[0].description
        document.querySelector('.h1').innerText = `${city.toUpperCase()}` 
        document.querySelector('.high').innerText = `High temperature: ${high.toFixed(2)}`
        document.querySelector('.low').innerText = `Low temperature: ${low.toFixed(2)}`
        document.querySelector('.humidity').innerText = `Humidity: ${humidity}`
        document.querySelector('.forecast').innerText = `Description: ${forecast}`
        
        if(high > 75){
            let color = document.querySelector('.result')
            color.style.backgroundColor = 'yellow'
        }else if (high < 75 && high > 60) {
            let color = document.querySelector('.result')
            color.style.backgroundColor = 'blue'
        }else {
            let color = document.querySelector('.result')
            color.style.backgroundColor = '#b0e0e6;'
        }
        return data
    }else window.alert ('City is not Valid')

}





