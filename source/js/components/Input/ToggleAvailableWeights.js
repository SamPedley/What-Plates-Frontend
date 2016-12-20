import React, { Component, PropTypes } from 'react';
import * as WeightActions from '../../actions/WeightActions';
import WeightStore from '../../stores/WeightStore';
import Toggle from 'material-ui/Toggle';

export default class CheckboxPercentage extends React.Component {
  constructor(props){
    super(props);
    this.state = {weight: WeightStore.getWeight() }
  }
  componentWillMount() { WeightStore.addChangeListener(this._updateState.bind(this)); }
  componentWillUnmount(){ WeightStore.removeChangeListener(this._updateState.bind(this)); }
  _updateState(){ this.setState({weight: WeightStore.getWeight()}); }

  _setAvailableWeight(index){
    WeightActions.toggleAvailabeWeight(index);
  }

  _renderWeight(current, plate, item){
    return(
      <div key={`weight-options-${item}`} className="container_half">
        <Toggle
          label={`${plate.weight}${plate.getUnit()}`}
          toggled={plate.available}
          onToggle={current._setAvailableWeight.bind(null, item)} />
      </div>
      );
  }

  render() {
    return (
      <div>
        {this.state.weight.plates.get().map( this._renderWeight.bind(null, this) )}
      </div>
    );
  }

}