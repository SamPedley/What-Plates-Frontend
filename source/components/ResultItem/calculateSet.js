import React from 'react'

// const setPlates

export const calculateSet = (set, index, userSettings, plates, sets) => {
  // get weight of half the bar
  // subtract the bar and divide by two
  let platesUsed = calcPlates(plates, set.total)
  console.log(platesUsed)
  return (<h1>thing</h1>)
}

const calcPlates = (plates, weight) => {
  let platesUsed = []
  for (let i = 0; i < plates.length; i += 1) {
    let count = 0
    while (weight >= plates[i].weight) {
      weight -= plates[i].weight
      count += 1
    }
    if (count >= 1) {
      plates[i].sets = count
      platesUsed.push(plates[i])
    }
  }
  return {platesUsed, weightLeft: weight}
}
