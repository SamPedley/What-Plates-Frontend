import React, { Component, PropTypes } from 'react';
import * as WeightActions from '../../actions/WeightActions';
import TextField from 'material-ui/TextField';

export default class InputWeight extends React.Component  {


  _updateWeight(e){
    WeightActions.updateTotalWeight(e.target.value);
  }

  render() {
    if(this.props.isForMax){
    return (<TextField
      type="number"
      hintText={"#"}
      style={{width: '200px', marginTop: '-25px'}}
      inputStyle={{fontSize: '32px', textAlign: 'center',width: '200px'}}
      onChange={this._updateWeight.bind(this)}
      value={this.props.weight.total}
      errorStyle={{position: 'absolute',textAlign: 'center',width: '100%',left: '0',bottom: '-8px'}}
      floatingLabelText="Your One Rep Max"

      />);}

    return (<TextField
      type="number"
      hintText={"#"}
      style={{width: '200px'}}
      inputStyle={{fontSize: '32px', textAlign: 'center',width: '200px'}}
      onChange={this._updateWeight.bind(this)}
      value={this.props.weight.total}
      errorText={this.props.weight.errorText}
      errorStyle={{position: 'absolute',textAlign: 'center',width: '100%',left: '0',bottom: '-8px'}}
      />);
  }
}
InputWeight.defaultProps = { weight: {}, isForMax: false }
