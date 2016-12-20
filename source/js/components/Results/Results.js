import React, { Component, PropTypes } from 'react';
import * as WeightActions from '../../actions/WeightActions';
import WeightStore from '../../stores/WeightStore';
import CircularProgress from 'material-ui/CircularProgress';

import _ from 'lodash';

import List from './List';
import Message from './Message';

export default class Results extends React.Component {
  constructor(props){
    super(props);
    this.state = { weight: WeightStore.getWeight(), used: WeightStore.getWeight().getPlatesUsed() }
  }
  componentWillMount() { WeightStore.addChangeListener(this._updateState.bind(this)); }
  componentWillUnmount(){ WeightStore.removeChangeListener(this._updateState.bind(this)); }
  _updateState(){ this.setState({weight: WeightStore.getWeight(), used: WeightStore.getWeight().getPlatesUsed()}); }

  _renderSets(item, key){
    let subTitle = '';
    let Weight = _.cloneDeep(this.state.weight);
    let units = Weight.plates.isPounds() ? 'Lbs' : 'Kg';
    if(this.state.weight.showPercentage){
    Weight.percentage = item;
    subTitle = ` - ${item}% of ${Weight.total}${units} is ${Weight.getTotalPercentage()}${units}`
  } else{
    Weight.total = item;
    subTitle = ` - ${item}${units}`
  }

  if(item <= 0 || Weight.total <= 0)
    subTitle = '';
    
    return (<div className="set_results-container" key={`such-sets-${key}`}>
    <h2 className="set_title">Set #{key+1} {subTitle}</h2>
      <Message weight={Weight} />
      <List weight={Weight} used={Weight.getPlatesUsed()}/>
    </div>);
  }

  render() {

    if(!this.state.weight.useSets)
    return (
      <div className="results_container">
        <Message weight={this.state.weight} />
        <List weight={this.state.weight} used={this.state.used}/>
      </div>
    );


    return <div className="setResults_container">
      {this.state.weight.sets.map( this._renderSets.bind(this) )}
    </div>;


  }

}
