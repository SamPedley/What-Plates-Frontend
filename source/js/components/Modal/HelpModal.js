import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ActionHelp from 'material-ui/svg-icons/action/help-outline';
import ActionBug from 'material-ui/svg-icons/action/bug-report';
import NavagationClose from 'material-ui/svg-icons/navigation/close';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';

export default class HelpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleOpen() {
    window.ga('send', 'event', 'Help Modal', 'Open', 'V2');
    this.setState({open: true}); }
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
      <div>
        <IconButton label="Help" tooltip="Help"
          onTouchTap={this.handleOpen.bind(this)}
          style={{position:'absolute', right: 0, top:0}}
        >
        <ActionHelp color='white' style={{height: '40px', width: '40px'}}
        hoverColor='$color-teal'/>
      </IconButton>
        <Dialog
          title="Hi There!"
          titleClassName="modal_help-title"
          actions={actions}
          modal={false}
          contentStyle={{minWidth: '270px'}}
          open={this.state.open}
          autoDetectWindowHeight={false}
          onRequestClose={this.handleClose.bind(this)}
          autoScrollBodyContent={true}

        >
        <h3 style={{textAlign: 'center'}}>Thanks for checking out What Plates. Feel free to let me know if you have any feedback, want to request a feature or find any bugs. </h3>
        <div className="modal_help-buttons">
          <RaisedButton
          label="email Me"
          href="mailto:sam@sampedley.com"
          secondary={true}
          style={{marginBottom: '15px'}}
          icon={<CommunicationEmail />}
        />
          <RaisedButton
          label="Report a Bug"
          href="https://bitbucket.org/sampedley/what-plates/issues"
          secondary={false}
          icon={<ActionBug />}
        />
    </div>
        </Dialog>
      </div>
    );
  }
}
