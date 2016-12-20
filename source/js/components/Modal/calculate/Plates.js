import React from 'react';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add-circle-outline';
import ContentRemove from 'material-ui/svg-icons/content/remove-circle-outline';
import Subheader from 'material-ui/Subheader';
import Badge from 'material-ui/Badge';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import Swap from 'material-ui/svg-icons/action/swap-horiz';
import RemoveDash from 'material-ui/svg-icons/content/remove';


import {List,ListItem} from 'material-ui/List';
import {LbsPlates, KgPlates} from '../../../classes/defaultPlates';

export default class CalculateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plates: LbsPlates,
      using: [],
      bar: 'Mens'
     };
  }


  _toggleWeight(){
    this._clearUsing();
    if(this.state.plates[0].isPounds){
      this.setState({plates:KgPlates});
    } else {
      this.setState({plates:LbsPlates});
    }
  }
  _clearUsing(){
    this.setState({using: []});
  }
  _plateExists(plate){
    return this.state.using.findIndex( (p) => p.weight === plate.weight );
  }
  _addPlate(index){
    var using = this.state.using;
    var plate = this.state.plates[index];
    var exists = this._plateExists(plate);
    if(exists !== -1) {
      using[exists].set +=1;
    } else {
      plate.set = 1;
      using.push(plate);
    }
    this.setState({using});
  }
  _removePlate(index){
    var using = this.state.using;
    var plate = this.state.plates[index];
    var exists = this._plateExists(plate);
    if(exists !== -1){
      if(using[exists].set !== 1){
        using[exists].set -=1;
      } else {
        using.splice(exists,1);
      }
    }
    this.setState({using})
  }
  _renderWeight(action, plate, item){
    return (
      <ListItem
        primaryText={`${plate.weight}${plate.isPounds ? 'Lbs':'Kg'}`}
        onTouchTap={action.add.bind(null,item)}
         key={`calculate-plate-${item}`}
         rightIconButton={<span>
           <IconButton onTouchTap={action.add.bind(null,item)}>
             <ContentAdd  />
           </IconButton>
           <IconButton onTouchTap={action.remove.bind(null,item)} >
           <ContentRemove />
           </IconButton>
           </span>}
         />
      );
  }
  _renderUsing(action, plate, key){
    return (
      <ListItem
        disabled={true}
        key={`total-plate-${key}`}
        primaryText={`${plate.set} Set${plate.set>1 ?'s':''} of ${plate.weight}${plate.isPounds ? 'Lbs':'Kg'} Plates`}
        secondaryText={``}
        />);

  }
  _getBarWeight(){
    let bar = this.state.bar;
    if(this.state.plates[0].isPounds){
      if(bar == 'Mens')
        return 45;
      if( bar == 'Womens')
        return 35;
      return 15;
    }else{
      if(bar == 'Mens')
        return 20;
      if( bar == 'Womens')
        return 15;
      return 5;
    }
  }
  _calculateTotal(using){
    let total = using.reduce(function(a, b) {
  return a + ((b.weight * 2) * b.set);
}, 0);
  return total + this._getBarWeight();

  }
  _handleBarChange(event, index, value){
    this.setState({bar:value});
  }

  render() {
    return (
      <div>

      <h4 style={{margin: '1rem 0 0 0',textAlign:'center'}}>Only for the exceptionally challenged among us...</h4>
        <section style={{width:'100%'}}>
        <DropDownMenu value={this.state.bar} onChange={this._handleBarChange.bind(this)} className="calc_input-sizes">
            <MenuItem value={'Mens'} label="Mens Bar" primaryText={`Mens Bar`}/>
            <MenuItem value={'Womens'} label="Womens Bar" primaryText={`Womens Bar`}/>
            <MenuItem value={'Training'} label="Technique Bar" primaryText={`Technique Bar`}/>
       </DropDownMenu>

       <RaisedButton
       label={`Use ${this.state.plates[0].isPounds ? 'Kg':'Lbs'} Plates`}
       onTouchTap={this._toggleWeight.bind(this)}
       icon={<Swap/>}
       primary={true}
       className="calc_input-sizes"
     />

        <RaisedButton
        label="Clear"
        onTouchTap={this._clearUsing.bind(this)}
        icon={<RemoveDash/>}
        secondary={true}
        className="calc_input-sizes"
      />



        </section>
        <hr/>

        {/* - - - - - - - - - - - - - - - - -*/}
         <List className="calc_data-sections">
          <Subheader>Weight Sets</Subheader>
           {this.state.plates.map( this._renderWeight.bind(null, {add: this._addPlate.bind(this), remove: this._removePlate.bind(this) }) )}
        </List>
        <List className="calc_data-sections calc_data-sections-right">
        <Subheader>Total</Subheader>

          {this.state.using.map(this._renderUsing.bind(null,{}))}
          <ListItem
            disabled={true}
            primaryText={`${this._getBarWeight()}${this.state.plates[0].isPounds ? 'Lbs':'Kg'} ${this.state.bar} Bar`}
            />
          <div style={{marginTop:'-2rem'}}>+</div>
          <hr />
          <ListItem
            disabled={true}
            primaryText={`Total: ${this._calculateTotal(this.state.using)}${this.state.plates[0].isPounds ? 'Lbs':'Kg'}`}
            />
       </List>

        {/* - - - - - - - - - - - - - - - - -*/}
      </div>
    );
  }
}
