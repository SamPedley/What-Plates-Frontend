import React, { Component, PropTypes } from 'react';
import * as WeightActions from '../../actions/WeightActions';
import Checkbox from 'material-ui/Checkbox';

export default class CheckboxSets extends React.Component {

  _handleClick(){
    // this._handleClick.bind(this)
    window.ga('send', 'event', 'Options Section', 'Use Sets', 'V2');
    WeightActions.toggleSets();
  }

  render() {
    return <Checkbox
      label="Use Sets"
      checked={this.props.weight.useSets}
      onTouchTap={this._handleClick.bind(this)}
      style={this.props.style}
      />
  }

}
CheckboxSets.defaultProps = { style: {}, weight:{} }
