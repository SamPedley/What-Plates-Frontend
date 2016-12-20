import React, { Component, PropTypes } from 'react';
import * as WeightActions from '../../actions/WeightActions';
import Checkbox from 'material-ui/Checkbox';

export default class CheckboxUnits extends React.Component {

  _handleClick(){
    // this._handleClick.bind(this)
    window.ga('send', 'event', 'Options Section', 'Use Kg Plates', 'V2');
    WeightActions.togglePlateUnits();
  }

  render() {
    return <Checkbox
      label="Use Kg Plates"
      checked={!this.props.weight.plates.isPounds()}
      onTouchTap={this._handleClick.bind(this)}
      style={this.props.style}
      />
  }

}
CheckboxUnits.defaultProps = { style: {}, weight:{} }
