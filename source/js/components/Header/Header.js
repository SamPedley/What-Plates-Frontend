import React from 'react';

import WeightSection from './WeightSection';
import Options from '../Modal/OptionsModal';
import HelpModal from '../Modal/HelpModal';
import SelectBar from '../Input/SelectBar';
import CheckboxRound from '../Input/CheckboxRound';
import OptionsSection from './OptionsSection'
import SetSection from './SetSection';

import * as WeightActions from '../../actions/WeightActions';
import WeightStore from '../../stores/WeightStore';

export default class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {weight: WeightStore.getWeight() }
  }

  componentWillMount() { WeightStore.addChangeListener(this._updateState.bind(this)); }
  componentWillUnmount(){ WeightStore.removeChangeListener(this._updateState.bind(this)); }
  _updateState(){ this.setState({weight: WeightStore.getWeight()}); }


    render(){
    return (
        <header className="header_container">
          <HelpModal />
          <div className="header_sections">
             <WeightSection weight={this.state.weight}/>
             <OptionsSection weight={this.state.weight}/>
             <SetSection weight={this.state.weight}/>

           </div>
        </header>
    );
    }
}
