import React, { Component, PropTypes } from 'react';
import * as WeightActions from '../../actions/WeightActions';
import WeightStore from '../../stores/WeightStore';

import InputPercent from '../Input/InputPercent';
import InputWeight from '../Input/InputWeight';
import SelectBar from '../Input/SelectBar';
import RaisedButton from 'material-ui/RaisedButton';
import ContentSave from 'material-ui/svg-icons/content/save';
import NavagationRefresh from 'material-ui/svg-icons/navigation/refresh';


export default class WeightSection extends React.Component  {

  _showPercentage(){
    if(this.props.weight.showPercentage  && !this.props.weight.useSets){
      return(<div className="header-input-group">
        <span style={{margin: '0 10px'}}>
        <InputPercent weight={this.props.weight}/>
      </span>
        <span>% of </span>
      </div>);
    }
  }

  _handleSave(){
    window.ga('send', 'event', 'Weight Section', 'Save', 'V2');
    WeightActions.saveCurrent();
  }

  _handleReset(){
    window.ga('send', 'event', 'Weight Section', 'Refresh', 'V2');
    WeightActions.clearCurrent()
  }

    _showPercentageResults(){
      if(this.props.weight.showPercentage  && !this.props.weight.useSets){
        return(<div className="header-input-group" style={{marginLeft: '10px'}}> is <span style={{fontSize: '32px'}}>{this.props.weight.getTotalPercentage()}</span>{this.props.weight.plates.getUnit()}</div>);
      }
    }

    showWeightInput(){
      if(this.props.weight.useSets && !this.props.weight.showPercentage){
      return null;}

      if(this.props.weight.useSets && this.props.weight.showPercentage){
      return (<span>
        <span style={{margin: '0 10px'}}>
            <InputWeight weight={this.props.weight} isForMax={true}/>
          </span>
        <span>{this.props.weight.plates.getUnit()}</span>
        </span>);}

      return (<span>
        <span style={{margin: '0 10px'}}>
              <InputWeight weight={this.props.weight}/>
            </span>
          <span>{this.props.weight.plates.getUnit()}</span>
          </span>)
    }

  render() {
    return (
      <div className="header_weight-wrap">
      <section className="header_weight">
      <div className="header_weight-container">
        {this._showPercentage()}
        <div>
        {this.showWeightInput()}

      </div>
        {this._showPercentageResults()}
      </div>
      <div className="clearfix">
      <SelectBar style={{width:'200px'}} weight={this.props.weight} />
      </div>
      </section>
      <div className="header_weight-buttons">
      <div className="header_button-container">
      <RaisedButton
        label="Save"
        backgroundColor={'#E0E0E0'}
        style={{width: '100%', borderRadius: 0}}
        onTouchTap={this._handleSave.bind(this)}
        icon={<ContentSave />}
        />
        </div>
 <div className="header_button-container">
        <RaisedButton
          label="Reset"
          backgroundColor={'#E0E0E0'}
          style={{width: '100%', borderRadius: 0}}
          onTouchTap={this._handleReset.bind(this)}
          icon={<NavagationRefresh />}
          />
          </div>
        </div>
    </div>
    );
  }

}
WeightSection.defaultProps = { weight: {} }
