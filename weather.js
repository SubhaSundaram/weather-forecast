//Complete the Weather API Backend part using openweathermap api
var apikey = 'e68445837d85981f6b73a91290e0e20b'
var msg = document.getElementsByClassName('weather')

function getData() {
  var input = document.getElementById('input').value
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    input +
    '&appid=' +
    apikey
  axios
    .get(url)
    .then((res) => {
      //   res.JSON()
      console.log(res)
      let temp = document.getElementsByClassName('temp')
      temp[0].innerHTML = res.data.main.temp + '°c'
      let weather = document.getElementById('weather')
      weather.innerHTML = res.data.weather[0].main
      let tempdiff = document.getElementsByClassName('hi-low')
      tempdiff[0].innerHTML =
        res.data.main.temp_max + '°c' + '/' + res.data.main.temp_min + '°c'
      let city = document.getElementsByClassName('city')
      city[0].innerHTML = res.data.name + ',' + res.data.sys.country
    })
    .catch(() => {
      msg.textContent = 'Please search for a valid city'
    })
}
