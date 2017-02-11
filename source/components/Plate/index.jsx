import React from 'react'

import s from './styles.css'

export const Plate = ({weight, isLbs, sets}) => (
  <div className={s.container}>
    <div className={s.sets}>
      <h4 className={s.setsNum}>{sets}&times;</h4>
      <h5 className={s.setsText}>{sets === 1 ? 'set' : 'sets' } of</h5>
    </div>
    <div className={s.plate}>
      <h4 className={s.weight}>{ weight }</h4>
      <h5 className={s.unit}>{isLbs ? 'LBS' : 'KG'}</h5>
    </div>
  </div>
)

export default Plate
