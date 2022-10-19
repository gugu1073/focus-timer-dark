export default function () {
  const forest = new Audio('./sounds/forest.wav')
  const rain = new Audio('./sounds/rain.wav')
  const coffeeshop = new Audio('./sounds/coffeeshop.wav')
  const fireplace = new Audio('./sounds/fireplace.wav')
  const timerEnd = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  coffeeshop.loop = true
  fireplace.loop = true
  forest.loop = true
  rain.loop = true
  timerEnd.volume = 0.3

  const volForest = value => (forest.volume = value)

  const volRain = value => (rain.volume = value)

  const volCoffeeshop = value => (coffeeshop.volume = value)

  const volFireplace = value => (fireplace.volume = value)

  return {
    forest,
    rain,
    coffeeshop,
    fireplace,
    timerEnd,
    volForest,
    volRain,
    volCoffeeshop,
    volFireplace
  }
}