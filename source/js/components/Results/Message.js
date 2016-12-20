import React, { Component, PropTypes } from 'react';

export default class Message extends React.Component {
  constructor(props){
    super(props);
  }


  // _setsWorking(){
  //   if(this.props.weight.showPercentage && )
  // }

  _showBanner(){
    let plates = this.props.weight.getPlatesUsed();
    let round = this.props.weight.roundUp ? 'up':'down';
    let unit = this.props.weight.plates.getUnit();

    if(this.props.weight.total === '' || (this.props.weight.showPercentage && this.props.weight.percentage === ''))
    return(
      <div style={{textAlign: 'center'}}>
        <h2>Sup Broseph,<br/>Put some weight in</h2>
      </div>
    );
    if(plates.roundBy!== 0 && !this.props.weight.errorText  && this.props.weight.total != "")
      return( <div className={`results_banner ${round}`}>
        {`The weight was rounded ${round} by ${plates.roundBy}${unit} to ${plates.total}${unit}`}
      </div>)
    if(this.props.weight.errorText || this.props.weight.percentageErrorText)
      return(<div className={`results_banner error`}>
        {this.props.weight.errorText} <br/>
        {this.props.weight.percentageErrorText}
      </div>);
  }
  render() {

    return (
      <div>
        {this._showBanner()}
      </div>
    );
  }

}

Message.defaultProps = { weight: {} }
