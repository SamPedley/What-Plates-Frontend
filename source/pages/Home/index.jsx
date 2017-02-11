import React from 'react'

import OptionsContainer from 'components/OptionsContainer'
import ResultsContainer from 'components/ResultsContainer'
import InputContainer from 'components/InputContainer'

import s from './styles.css'

const Home = () => (
  <div>
    <section className={s.container}>
      <InputContainer />
      <OptionsContainer />
    </section>
    <ResultsContainer />
  </div>
)

export default Home
