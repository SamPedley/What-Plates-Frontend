import React from 'react';

import TextField from 'material-ui/TextField';


import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

//https://en.wikipedia.org/wiki/One-repetition_maximum
//http://www.timinvermont.com/fitness/orm.htm
export default class OneRepMax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0,
      reps: 10,
      rm: 0,
      formula: 'brzycki'
         };
  }

  updateReps(event, index, value){
    this.calcMax(value, this.state.weight, this.state.formula);
  }

  updateFormula(event, index, value){
    this.calcMax(this.state.reps, this.state.weight, value);
  }

  updateWeight(event, index, value){
    this.calcMax(this.state.reps, event.target.value, this.state.formula);
  }

  countTo(num){
    let list = [];
    for(let start = 1; start<num+1; start++){
      list.push(<MenuItem value={start} primaryText={`${start} Reps`} key={`orm-reps-${start}`} />)
    }
    return list;
  }



  // calcCoe(rm,coe){
  //   let squat = [1.0, 1.0475 ,1.13, 1.1575, 1.2, 1.242, 1.284, 1.326, 1.368, 1.41];
  //   let bench = [1.0 ,1.035	,1.08,	1.115,	1.15,	1.18,	1.22,	1.255,	1.29,	1.325];
  //   let deadlift = [1.0, 1.065, 1.13, 1.147, 1.164, 1.181, 1.198, 1.232, 1.232, 1.24]
  //
  //   let reps = this.state.reps;
  //   if(coe == 'squat')
  //     return rm * squat[reps-1];
  //   if(coe == 'bench')
  //     return rm * bench[reps-1];
  //   if(coe == 'deadlift')
  //     return rm * deadlift[reps-1];
  //
  //   return rm;
  // }


  calcMax(reps, weight, formula){
     let rm = 0;
     if(formula === 'lander'){
      rm = Math.round(weight/(1.0278-(.0278*reps)));}
    if(formula == 'epley'){
      rm = Math.round(weight * (1 + (reps/30)));}
    if(formula == 'brzycki'){
      rm = Math.round(weight * (36 / (37-reps)));}

    if(rm < 0){ rm = 0;}
    this.setState({reps, weight, rm, formula});
  }

  showPercentages(downTo){
    let list = [];
    let rm = this.state.rm;
    for(let start = 95; start>=downTo; start-=5){
      list.push(<div className="orm-percentage-results" key={`orm-results-${start}`}>
        <h4>{start}%</h4>
        <p>{Math.round((start / 100) * rm)}Lbs/KG</p>
      </div>)
    }
    return list;
  }

  showResults(){
    return (<div>
      <h1 className="orm_rm">Your 1 Rep Max is {this.state.rm}Lbs/KG</h1>

      <section className="orm_results">

        {this.showPercentages(10)}

      </section>
    </div>);
  }

  showHelpMessage(){
    return <h1 className="orm_rm">Add some Weight</h1>
  }



  render() {
    return (
      <div>

        <section className="orm_input">
        <div className="orm_at-thing">
        <SelectField
        value={this.state.reps}
        onChange={this.updateReps.bind(this)}
        floatingLabelText="Reps"
        floatingLabelStyle={{left:'0',width:'100%'}}
        >
         { this.countTo(15) }
       </SelectField>
       </div>
       <h2 className="orm_at-thing">@</h2>
        <div className="orm_at-thing"><TextField
          hintText="#"
          type="number"
          floatingLabelText="Weight"
          onChange={this.updateWeight.bind(this)}
        />
        </div>

        </section>
        <section className="orm_formula">
          <SelectField
          value={this.state.formula}
          onChange={this.updateFormula.bind(this)}
          floatingLabelText="Using the"
          >
           <MenuItem value={'lander'} primaryText={`Lander Formula`} />
           <MenuItem value={'epley'} primaryText={`Epley Formula`} />
           <MenuItem value={'brzycki'} primaryText={`Brzycki Formula`} />
         </SelectField>
        </section>

        {this.state.weight ? this.showResults() : this.showHelpMessage()}


      </div>
    );
  }
}
