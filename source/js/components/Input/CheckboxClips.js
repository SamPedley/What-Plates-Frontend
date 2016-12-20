import React, { Component, PropTypes } from 'react';
import * as WeightActions from '../../actions/WeightActions';
import Checkbox from 'material-ui/Checkbox';

export default class CheckboxClips extends React.Component {

  _handleClick(){
    window.ga('send', 'event', 'Options Section', '2.5Kg Collars', 'V2');
    WeightActions.toggleClips();
  }

  render() {
      if(this.props.weight.plates.isPounds())
        return <span></span>;
    return <Checkbox
      label="Use 2.5Kg Collars"
      checked={this.props.weight.useClips}
      onTouchTap={this._handleClick.bind(this)}
      style={this.props.style}
      />
  }

}
CheckboxClips.defaultProps = { style: {}, weight:{} }
