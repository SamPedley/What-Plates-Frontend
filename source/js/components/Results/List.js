import React, { Component, PropTypes } from 'react';


export default class List extends React.Component {

  _showResults(){
    if(!this.props.weight.errorText && !this.props.weight.percentageErrorText)
      return  this.props.used.platesUsed.map((plate, index) => (
          <section className="results_item"  key={`grid-${index}`}>
            <img src={plate.img} />
            <h2 className="results_item-title">{plate.sets} set{plate.sets>1? 's':''} of {plate.weight} {plate.getUnit()}</h2>
          </section>
        ))
  }

  _showResultHeader(){
    if(this.props.weight.showConversion)
    return   <div className="results_banner default">
      {this.props.used.total}{this.props.weight.plates.getUnit()} is {this.props.weight.showConversionText(this.props.used.total)}
    </div>
  }

  render() {
    if(this.props.weight.total !== '' && this.props.weight.percentage !== '' && this.props.used.platesUsed.length === 0 && !this.props.weight.errorText  && !this.props.weight.percentageErrorText)
      return <h1 style={{textAlign:'center'}}>That's just the bar you idiot.</h1>
    if(!this.props.weight.errorText && !this.props.weight.percentageErrorText && this.props.used.platesUsed.length === 0)
    return null;
    return (
      <div className="results_list clearfix">
      {this._showResultHeader()}
        {this._showResults()}
      </div>
    );
  }

}

List.defaultProps = { weight: {} ,used: {} }
