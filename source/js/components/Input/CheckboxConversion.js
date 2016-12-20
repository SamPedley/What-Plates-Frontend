import React, { Component, PropTypes } from 'react';
import * as WeightActions from '../../actions/WeightActions';
import Checkbox from 'material-ui/Checkbox';

export default class CheckboxConversion extends React.Component {

  _handleClick(){
    // this._handleClick.bind(this)
    window.ga('send', 'event', 'Options Section', 'Show Conversion', 'V2');
    WeightActions.toggleShowConversion();
  }

  render() {
    return <Checkbox
      label="Show Conversion"
      checked={this.props.weight.showConversion}
      onTouchTap={this._handleClick.bind(this)}
      style={this.props.style}
      />
  }

}
CheckboxConversion.defaultProps = { style: {}, weight:{} }
