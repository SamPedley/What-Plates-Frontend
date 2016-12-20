import React, { Component, PropTypes } from 'react';
import * as WeightActions from '../../actions/WeightActions';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


export default class InputBar extends React.Component {

 _handleChange(event, index, value){
   window.ga('send', 'event', 'Weight Section', 'Change Bar', value);

   WeightActions.updateBar(value);
 }

  render() {
    let unit = this.props.weight.plates.getUnit();
    return (
      <SelectField value={this.props.weight.bar} onChange={this._handleChange.bind(this)} style={this.props.style}>
        <MenuItem value={'mens'} label="Mens Bar" primaryText={`Mens Bar - ${this.props.weight.getBarWeight('mens')}${unit}`}/>
        <MenuItem value={'womens'} label="Womens Bar" primaryText={`Womens Bar - ${this.props.weight.getBarWeight('womens')}${unit}`}/>
        <MenuItem value={'training'} label="Technique Bar" primaryText={`Technique Bar - ${this.props.weight.getBarWeight('training')}${unit}`}/>
      </SelectField>
    );
  }

}

InputBar.defaultProps = { style: {}, weight:{} };
