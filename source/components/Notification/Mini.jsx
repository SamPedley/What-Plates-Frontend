import React from 'react'
import Snackbar from 'material-ui/Snackbar'

import { connect } from 'react-redux'
import { hideMiniMessage } from 'actions'

const Mini = ({miniMessage, hideMiniMessage}) => (
  <Snackbar
    open={!!miniMessage}
    message={miniMessage}
    autoHideDuration={3000}
    onRequestClose={() => hideMiniMessage()}
       />
)

const mapStateToProps = state => ({ miniMessage: state.ui.miniMessage })

export default connect(mapStateToProps, {hideMiniMessage})(Mini)
