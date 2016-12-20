import Plates from './Plates'
const Convert = 0.453592;

export default class Weight {

    constructor(total = '', bar = 'mens', roundUp = false, pounds = true){
        this.total = total;
        this.bar = bar;
        this.roundUp = roundUp;
        this.plates = new Plates(pounds);
        this.percentage = '';
        this.useClips = false;

        this.errorText = '';
        this.showPercentage = false;
        this.percentageErrorText = '';
        this.showConversion = false;
        this.useSets = false;
        this.sets = [""];
    }

    getConversion(total){
      if(this.plates.isPounds())
        return (total * Convert).toFixed(2) + 'Kg';
      return (total / Convert).toFixed(2) + 'Lbs'
    }

    showConversionText(weight){
      if(this.showConversion)
      return this.getConversion(weight);
      return '';
    }

    getBarWeight(bar = this.bar){
      if(this.plates.isPounds()){
        if(bar === 'mens')
            return 45;
        if(bar === 'womens')
            return 35;
        if(bar === 'training')
            return 15;
        } else {
          if(bar === 'mens')
              return 20;
          if(bar === 'womens')
              return 15;
          if(bar === 'training')
              return 5;
        }
        return null;
    }

    getTotalPercentage(){
      return Math.round( this.total * (this.percentage/100) );
    }

    getTotalPerSide(){
     let total = 0;

      if(this.showPercentage){
         total= ( this.getTotalPercentage() - this.getBarWeight()) / 2;
      } else {
        total = (this.total - this.getBarWeight()) / 2;
       }

       if(this.useClips && !this.plates.isPounds()){
        return total - 2.5;
       }

       return total;


    }

    calculatePlates(weight){
      let platesUsed = [];
      let plates = this.plates.getAvailable();
      for(let i = 0; i < plates.length; i+=1){
         let count = 0;
         while(weight >= plates[i].weight){
             weight -= plates[i].weight;
             count += 1;
         }
         if(count >= 1){
             plates[i].sets = count;
             platesUsed.push(plates[i])
         }
       }
       return {platesUsed, weight}
    }

    _roundedBy(total){
      if(this.showPercentage)
        return Math.abs(total - this.getTotalPercentage());
      return Math.abs(total - this.total);


    }
    _usedTotal(platesUsed){
      let weight = platesUsed.reduce( (a, b) => {return a + (b['weight'] * b['sets']);}, 0);
      if(this.useClips && !this.plates.isPounds())
        weight += 2.5;
      return  weight * 2 + this.getBarWeight();
    }

    getPlatesUsed(){
      var {platesUsed, weight} = this.calculatePlates( this.getTotalPerSide() )

      if(weight !== 0 && this.roundUp) {
        let new_weight = this.getTotalPerSide() + this.plates.lowestAvailable().weight;
        var {platesUsed, weight} =  this.calculatePlates( new_weight );
      }

        var total = this._usedTotal(platesUsed);
        var roundBy = this._roundedBy(total);

        return {
          platesUsed,
          total,
          roundBy,
          roundUp: this.roundUp,
        };
    }
}
