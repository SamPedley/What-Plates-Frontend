import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ActionHelp from 'material-ui/svg-icons/action/help-outline';
import BarIcon from 'material-ui/svg-icons/places/fitness-center';
import NavagationClose from 'material-ui/svg-icons/navigation/close';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import ContentAdd from 'material-ui/svg-icons/content/add-circle-outline';
import ContentRemove from 'material-ui/svg-icons/content/remove-circle-outline';

import OneRepMax from './OneRepMax';

export default class OneRepMaxModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
     };
  }

  handleOpen() {
    window.ga('send', 'event', 'One Rep Max Modal', 'Open', 'V2');
    this.setState({open: true}); 
  }
  handleClose() { this.setState({open: false}); }

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={false}
        icon={<NavagationClose />}
        onTouchTap={this.handleClose.bind(this)}
        style={{width: '100%'}}

      />
    ];
    return (
      <div>
      <RaisedButton
      style={{width:'100%'}}
      onTouchTap={this.handleOpen.bind(this)}
      label="1 Rep Max Calculator"
      backgroundColor="rgba(214, 69, 65, 1.0)"
      labelColor="white"
    />
        <Dialog
          title="1 Rep Max Estimate"
          titleClassName="modal_help-title"
          actions={actions}
          modal={false}
          contentStyle={{minWidth: '270px'}}
          open={this.state.open}
          autoDetectWindowHeight={false}
          onRequestClose={this.handleClose.bind(this)}
          autoScrollBodyContent={true}
        >
        {/* - - - - - - - - - - - - - - - - -*/}
        <OneRepMax />
        {/* - - - - - - - - - - - - - - - - -*/}
        </Dialog>
      </div>
    );
  }
}
