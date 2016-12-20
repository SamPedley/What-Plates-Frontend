import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import NavagationClose from 'material-ui/svg-icons/navigation/close';

import * as WeightActions from 'actions/WeightActions';
import WeightStore from 'stores/WeightStore';

import CalculateModal from '../Modal/CalculateModal';
import OneRepMaxModal from '../Modal/OneRepMaxModal';


export default class Aside extends React.Component {
  constructor(props){
    super();
    this.state = {list: WeightStore.getList() }
  }
  componentWillMount() {
    WeightStore.addChangeListener(this._updateState.bind(this));
  }
  componentWillUnmount(){
    WeightStore.removeChangeListener(this._updateState.bind(this));
  }
  _updateState(){
    this.setState({list: WeightStore.getList() });
  }
  _renderListItem(reset, weight, key){
    var used = weight.getPlatesUsed();
    var units = weight.plates.isPounds() ? 'Lbs' : 'Kg';
    if(weight.useSets){
      var message = `${weight.sets.length} Set${weight.sets.length>1?'s':''}`;
    } else if(weight.showPercentage){
      var message = `${weight.percentage}% of ${weight.total}${units}`;
    } else {
      var message = `${weight.total}${units}`;
    }
    if(weight.showPercentage && weight.useSets){
      var round =`1RM of ${weight.total}${units}`;
    } else if(weight.useSets){
      var round =`in ${units}`;
    } else if(used.roundBy !== 0){
      var round =`Rounded ${weight.roundUp ? 'up':'down'} to ${used.total}`;
    }
    return(
      <div className={`aside-item ${weight.bar} ${weight.useSets? 'aside-item-sets':''}`} key={`aside-item-${key}`} >
        <IconButton tooltip="Delete Me" style={{position: 'absolute', top: 0, right: 0}} onClick={reset.remove.bind(null,key)}>
          <NavagationClose color="white" hoverColor="#F44336" />
        </IconButton>
        <div className="aside-clickable" onClick={reset.set.bind(null,key)}>
        <h3 className="aside-title">{message}</h3>
        <h3 className="aside-subtitle">{round}</h3>
        <hr />
        {weight.useSets ? null :
        <div className="asside-weights">
          {used.platesUsed.map( (plate, k, list) => <span key={`aside-weight-${k}`}>{plate.sets}x{plate.weight} {k+1 !=list.length ? ' + ': ''}</span> )}
        </div>
        }
        </div>
      </div>
    );
  }
_setActive(key){
  WeightActions.setActive(key);
}
_removeFromList(key){
  WeightActions.removeFromList(key);
}
_noSavedMessage() {
  if(this.state.list.length === 0){
    return(<div className="aside-item">Saved items show up here!</div>)
  }
}
  render() {
    return (
      <aside className="aside_container">

        {this._noSavedMessage()}
        {this.state.list.map( this._renderListItem.bind(null, {set:this._setActive.bind(this), remove: this._removeFromList.bind(this)}) ).reverse()}
        <hr style={{border:'1px solid white', margin: '1rem 0 0.8rem 0'}}/>

        <h3 className="aside_title">Other Things n` Stuff</h3>
        <OneRepMaxModal />
        <br/>
        <CalculateModal />


      </aside>
    );
  }

}
