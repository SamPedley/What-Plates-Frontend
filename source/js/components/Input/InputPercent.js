import React, { Component, PropTypes } from 'react';
import * as WeightActions from '../../actions/WeightActions';
import TextField from 'material-ui/TextField';

export default class InputPercent extends React.Component  {
  constructor(props){
    super(props);
  }

  _updatePercentage(e){
    WeightActions.updatePercentage(e.target.value);
  }

  render() {
    return <TextField
      type="number"
      hintText={"%"}
      style={{width: '100px'}}
      inputStyle={{fontSize: '32px', textAlign: 'center'}}
      onChange={this._updatePercentage.bind(this)}
      value={this.props.weight.percentage}
      errorText={this.props.weight.percentageErrorText}
      errorStyle={{position: 'absolute',textAlign: 'center',width: '100%',left: '0',bottom: '-8px'}}
      />
  }
}
InputPercent.defaultProps = { weight: {} }
