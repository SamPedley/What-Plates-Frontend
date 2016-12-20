import {LbsPlates, KgPlates} from './defaultPlates';
import _ from 'lodash';

export default class Plates {

    constructor(lbs = true){
      this.lbs = lbs;
      this.plates = null;
      this.generatePlates();
    }
    
    generatePlates(){
      if(this.lbs) {
        this.plates = _.cloneDeep(LbsPlates);
      } else {
        this.plates =  _.cloneDeep(KgPlates);
      } 
    }

    toggleAvailability(index){
      this.plates[index].available = !this.plates[index].available;
    }

    lowestAvailable(){
      return this.getAvailable().sort( (a,b) => a.weight - b.weight )[0];
    }
    
    getAvailable(){
      return this.plates.filter( (plate) => plate.available  === true );
    }
}