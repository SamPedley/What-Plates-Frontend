import React from 'react'
import { connect } from 'react-redux'

import Plate from 'components/Plate'
import { getCalcDeps } from 'reducers'
import s from './styles.css'

export const ResultItem = ({set, index, userSettings, bar = 45, plates, sets}) => {
  const results = calculateSet(plates, set.total, bar, userSettings.roundUp)
  return (
    <section className={s.container}>
      <h3 className={s.header}>Set {index} - remaining {results.remaining * 2}</h3>
      <div className={s.platesWrapper}>
        {
          set.total < 25
          ? <div className={s.errorContainer}>
            <h4 className={s.errorTitle}>Is that all you got?!</h4>
            <h5 className={s.subTitle}>Go put your big boy/girl pants on then add some more weight!</h5>
          </div>
          : results.platesUsed.map(
            (item, index) => <Plate key={`result-item-${index}`} weight={item.weight} sets={item.sets} isLbs={item.isLbs} />
          )
      }
      </div>
    </section>
  )
}

export default connect(getCalcDeps)(ResultItem)

// --- Helpers ---

const calculateSet = (plates, total, bar, roundUp = false) => {
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
