import React from 'react'
import { connect } from 'react-redux'

import ResultItem from 'components/ResultItem'
import s from './styles.css'

const ResultsContainer = ({sets, bar}) => (
  <section className={s.container}>
    {
      sets.map((item, index) => <ResultItem
        index={index}
        set={item}
        bar={bar}
        key={`result-container-${index}`} />)
    }
  </section>
)
const mapStateToProps = state => ({ sets: state.sets, bar: state.bars.reduce((acc, item) => item.active ? item.weight : acc, 0) })

export default connect(mapStateToProps)(ResultsContainer)
