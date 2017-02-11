import React from 'react'
import { connect } from 'react-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import InputItem from 'components/InputItem'
import { updateSet, addSet, removeSet } from 'actions'
import s from './styles.css'

export const InputContainer = ({ sets, usingLbs, updateSet, addSet, removeSet }) => (
  <section className={s.container}>
    {
      sets.map((item, index) => <InputItem
        index={index}
        set={item}
        usingLbs={usingLbs}
        remove={() => removeSet(index)}
        onChange={(input) => updateSet(index, input)}
        key={`input-container-${index}`} />)
    }

    <FloatingActionButton
      onClick={() => addSet()}
      secondary
      mini>
      <ContentAdd />
    </FloatingActionButton>
  </section>
)
const mapStateToProps = (state) => ({ sets: state.sets, usingLbs: state.userSettings.usingLbs })

export default connect(mapStateToProps, {updateSet, addSet, removeSet})(InputContainer)
