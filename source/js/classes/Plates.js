import {LbsPlates, KgPlates} from './defaultPlates';
import _ from 'lodash';

export default class Plates {

    constructor(pounds = true){
      pounds ? this.setUnit('lbs') : this.setUnit('kg');
    }

    toggleAvailability(index){
      this.plates[index].available = !this.plates[index].available;
    }

    lowestAvailable(){
      return this.getAvailable().sort( (a,b) => a.weight - b.weight )[0];
    }
    
    toggleUnits(){
      if(this.isPounds())
        return this.setUnit('kg');
    return this.setUnit('lbs');
    }
    
    setUnit(unit){
      if(unit == 'lbs') {
        this.plates = _.cloneDeep(LbsPlates);
      } else if(unit == 'kg'){
        this.plates =  _.cloneDeep(KgPlates);
      } else {
        throw new Error('Invalid unit');
      }
    }
    isPounds(){
      return this.plates[0].isPounds;
    }
    getUnit(){
      return this.plates[0].isPounds ? 'Lbs' : 'Kg';
    }

    getAvailable(){
      return this.plates.filter( (plate) => plate.available  === true );
    }

    get() {
        return this.plates;
    }

}