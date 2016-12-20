import React, { Component, PropTypes } from 'react';
import * as WeightActions from '../../actions/WeightActions';
import Checkbox from 'material-ui/Checkbox';


export default class CheckboxRound extends React.Component {

  _handleClick(){
    // this._handleClick.bind(this)
    window.ga('send', 'event', 'Options Section', 'Round Up', 'V2');
    WeightActions.toggleRound();
  }

  render() {
    return <Checkbox
      label="Round Up"
      checked={this.props.weight.roundUp}
      onTouchTap={this._handleClick.bind(this)}
      style={this.props.style}
      />
  }

}

CheckboxRound.defaultProps = { style: {}, weight:{} }
