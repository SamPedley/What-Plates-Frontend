import React, { Component, PropTypes } from 'react';
import * as WeightActions from '../../actions/WeightActions';
import Checkbox from 'material-ui/Checkbox';

export default class CheckboxPercentage extends React.Component {
  _handleClick(){
    // this._handleClick.bind(this)
    window.ga('send', 'event', 'Options Section', 'Use Percentages', 'V2');
    WeightActions.toggleShowPercentage();
  }

  render() {
    return <Checkbox
      label="Use Percentages"
      checked={this.props.weight.showPercentage}
      onTouchTap={this._handleClick.bind(this)}
      style={this.props.style}
      />
  }

}
CheckboxPercentage.defaultProps = { style: {}, weight:{} }
