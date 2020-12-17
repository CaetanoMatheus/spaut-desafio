function placeZero(value) { 
  return value < 10 ? '0' + value : value
}

function createClock() {
  let date = new Date()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  let time = placeZero(hour) + ':' + placeZero(minute) + ':' + placeZero(second)
  document.getElementById('clock').innerHTML = time
}

function handleDate() {
  let date = new Date()
  let day = date.getDay()
  let month = date.getMonth()
  let year = date.getFullYear()
  let currentDate = placeZero(day) + '/' + placeZero(month) + '/' + placeZero(year)
  document.getElementById('date').innerHTML = currentDate
}

setInterval(createClock, 500)
window.addEventListener('DOMContentLoaded', handleDate)
