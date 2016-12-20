import React, { Component, PropTypes } from 'react';
import * as WeightActions from '../../actions/WeightActions';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSave from 'material-ui/svg-icons/content/save';
import ActionDelete from 'material-ui/svg-icons/action/delete';


export default class MoveOptions extends React.Component  {
  _saveCurrent(){
    WeightActions.saveCurrent();
  }
  _clearCurrent(){
    WeightActions.clearCurrent();
  }
  render() {
    return (
      <div className="header_save-container">
        <FloatingActionButton backgroundColor='#009688' style={{marginRight: '10px'}} onTouchTap={this._saveCurrent}>
          <ContentSave />
        </FloatingActionButton>
        <FloatingActionButton  backgroundColor='#F44336' onTouchTap={this._clearCurrent}>
          <ActionDelete />
        </FloatingActionButton>
      </div>
    );
  }

}