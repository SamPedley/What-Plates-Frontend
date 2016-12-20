import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import NavagationMore from 'material-ui/svg-icons/navigation/more-horiz';
import NavagationClose from 'material-ui/svg-icons/navigation/close';

import CheckboxRound from '../Input/CheckboxRound';
import CheckboxPercentage from '../Input/CheckboxPercentage';
import CheckboxConversion from '../Input/CheckboxConversion';
import CheckboxUnits from '../Input/CheckboxUnits';
import CheckboxSets from '../Input/CheckboxSets';
import ToggleAvailabeWeight from '../Input/ToggleAvailableWeights';
import CheckboxClips from '../Input/CheckboxClips';


export default class OptionsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  handleOpen() {
    window.ga('send', 'event', 'Options Modal', 'Open', 'V2');
    this.setState({open: true});
  }
  handleClose() { this.setState({open: false}); }

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={false}
        icon={<NavagationClose />}
        style={{width: '100%'}}
        onTouchTap={this.handleClose.bind(this)}
      />
    ];

    return (
      <div className="header_options_button">
        <RaisedButton label=" All Options"
          onTouchTap={this.handleOpen.bind(this)}
          backgroundColor="rgba(224, 224, 224, 1.0)"
          icon={<NavagationMore style={{height: '40px', width: '40px'}}
          />}
        />
        <Dialog
          title="Options"
          titleClassName="modal_options-title"
          actions={actions}
          modal={false}
          contentStyle={{minWidth: '270px'}}
          open={this.state.open}
          autoDetectWindowHeight={false}
          autoScrollBodyContent={true}
          onRequestClose={this.handleClose.bind(this)}
        >
          <div className="clearfix" style={{marginTop:'1rem'}}>

            <div className="container_half">
              <CheckboxPercentage weight={this.props.weight} />
            </div>
           <div className="container_half">
             <CheckboxRound weight={this.props.weight} />
            </div>
          <div className="container_half">
            <CheckboxConversion weight={this.props.weight} />
            </div>
          <div className="container_half">
            <CheckboxUnits weight={this.props.weight} />
            </div>
           <div className="container_half">
            <CheckboxClips weight={this.props.weight} />
            </div>
          <div className="container_half">
            <CheckboxSets weight={this.props.weight}/>
            </div>
          </div>
          <hr className="modal_options-hr"/>
          <h2 className="modal_options-subtitle">Available Weights</h2>
            <ToggleAvailabeWeight />
        </Dialog>
      </div>
    );
  }
}

OptionsModal.defaultProps = { weight: {} }
