import React, { Component, PropTypes } from 'react';
import WeightSection from './WeightSection';
import Options from '../Modal/OptionsModal';
import MoveOptions from './MoveOptions';
import HelpModal from '../Modal/HelpModal';
import CheckboxRound from '../Input/CheckboxRound';
import CheckboxPercentage from '../Input/CheckboxPercentage';
import CheckboxConversion from '../Input/CheckboxConversion';
import CheckboxUnits from '../Input/CheckboxUnits';
import CheckboxClips from '../Input/CheckboxClips';
import CheckboxSets from '../Input/CheckboxSets';


const cStyle = {width: '200px', margin: '0 auto'};
export default class OptionsSection extends React.Component {

    render(){
    return (
      <section className="header_options" >
       <div className="header_options-container">
       <CheckboxSets style={cStyle} weight={this.props.weight}/>
       <CheckboxPercentage style={cStyle} weight={this.props.weight}/>

          <CheckboxRound style={cStyle} weight={this.props.weight}/>
           <CheckboxUnits style={cStyle} weight={this.props.weight}/>
            <CheckboxClips style={cStyle} weight={this.props.weight}/>
           <CheckboxConversion style={cStyle} weight={this.props.weight}/>

       </div>
      <Options weight={this.props.weight}/>
      </section>
    );
    }
}
OptionsSection.defaultProps = { weight: {} }
