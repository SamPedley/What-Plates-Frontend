import React, { Component, PropTypes } from 'react';
import * as WeightActions from '../../actions/WeightActions';
import WeightStore from '../../stores/WeightStore';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import NavagationClose from 'material-ui/svg-icons/navigation/close';
import RaisedButton from 'material-ui/RaisedButton';
import Add from 'material-ui/svg-icons/content/add';


const style = {
  marginLeft: 20
};

export default class WeightSection extends React.Component  {
  constructor(props){
    super(props);
    this.state = { weight: WeightStore.getWeight()}
  }
  componentWillMount() { WeightStore.addChangeListener(this._updateState.bind(this)); }
  componentWillUnmount(){ WeightStore.removeChangeListener(this._updateState.bind(this)); }
  _updateState(){ this.setState({weight: WeightStore.getWeight()}); }


  _showSets(actions, item, key){
    let text = '';
    let helper = '';
    if(actions.percent){
      text =  `Set #${key + 1}`;
      helper = `% of 1RM`;
    } else {
      text =  `Set #${key + 1} `;
      helper = `in ${actions.unit}`;
    }

    return(
      <div key={`sets-${key}`} style={{textAlign:'center'}}>
      <TextField
        floatingLabelText={text}
        type="number"
        hintText={helper}
        onChange={actions.update.bind(null,key)}
        value={item}
        inputStyle={{fontSize: '32px', textAlign: 'center'}}
        style={{marginTop:'0px'}}
      />
      <span>{actions.percent? '%':actions.unit}</span>
      <IconButton
      tooltip={`Delete Set ${key+1}`}
      style={{zIndex:'2'}}
      onClick={actions.remove.bind(null,key)}
      >
        <NavagationClose />
      </IconButton>
      </div>
    )
  }

  _updateSet(key,e)
  {
    WeightActions.updateSet(key,e.target.value);
  }

  _removeSet(key,e){
    WeightActions.removeSet(key,e.target.value);
  }

  render() {
		if(this.state.weight.useSets)
    return (
      <section className="header_setBox">
        <div className="header_options-container header_sets-container">
        {this.state.weight.sets.map( this._showSets.bind(null,{update:this._updateSet, remove:this._removeSet, percent: this.state.weight.showPercentage, unit: this.state.weight.plates.isPounds() ? 'Lbs' : 'Kg'}) )}
        </div>
        <div className="header_options_button">
          <RaisedButton label="Add New"
            onTouchTap={WeightActions.addNewSet}
            backgroundColor="rgba(224, 224, 224, 1.0)"
            icon={<Add />}
          />
          </div>
      </section>
    );
		return null;
  }

}
