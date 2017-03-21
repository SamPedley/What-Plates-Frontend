export class CalcPlates {
  constructor (plates = [], total = 0, bar = 45, roundUp = false) {
    this.plates = plates
    this.total = total
    this.bar = bar
    this.sideTotal = 0
    this.roundUp = roundUp
    this.usedPlates = []
    this.remaining = 0
    this.calculateSet()
  }

  calculateSet () {
    this.calcWeightPerSide()
    this.updateTotalWithPercent()
  }

  calcWeightPerSide (total) {
    return (total - bar) / 2
  }

  getUsedPlates () { return this.usedPlates }
  getRemainingWeight () { return this.remaining }
}

export const calculateSet = (plates, total, bar, roundUp = false) => {
  var weight = (total - bar) / 2
  var result = calcPlates(plates, weight)
  if (roundUp && result.remaining !== 0) {
    weight += plates[plates.length - 1].weight
    result = calcPlates(plates, weight)
  }
  return result
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
  return {platesUsed, remaining: weight}
}

// const calcPlates = (plates, weight) => {
//   let platesUsed = []
//   for (let i = 0; i < plates.length; i += 1) {
//     let count = 0
//     while (weight >= plates[i].weight) {
//       weight -= plates[i].weight
//       count += 1
//     }
//     if (count >= 1) {
//       plates[i].sets = count
//       platesUsed.push(plates[i])
//     }
//   }
//   return {platesUsed, remaining: weight}
// }

export default calculateSet

/*
  Get the weight of the bar they're using
  Get the weight of the clips they're using
  Get the plates that are available

  If the person wants a percentage of the goal weight/ 1RM then reduce the toal by that percentage
  Calculate remove the bar and clips from the total weight
  Cut the weight in half to get the toal we're trying to achive for each side.

  reduce through the plates and find all the plates that match
    Each plate should have a set amount available
    Should be able to say that there:
      Aren't enough plates to make that weight and x is left over
      or The smallest we could get is x

  Once that is complete test to see if there is a remaining weight
  If there is remaining weight and the user is looking to round up
  round up by the smallest plate and run the calculation again

*/

/*

  Optomize for least amout of plates -> currently doing that;

  Optomize for quick plate changes:
    Need to know all sets:
    45 35 25 =

    25 + 2 * 10s - 25 + 10 - 25

*/
