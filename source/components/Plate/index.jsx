import React from 'react'

import s from './styles.css'

export const Plate = ({weight, isLbs}) => (
  <div className={s.container}>
    <div className={s.plate}>
      <h4 className={s.weight}>{ weight }</h4>
      <h5 className={s.unit}>{isLbs ? 'LBS' : 'KG'}</h5>
    </div>
  </div>
)

export default Plate
