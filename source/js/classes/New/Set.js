import Plates from './New/Plates.js';
import Bar from './Bar.js';


export default class Set {
    
    constructor(){
        this.equipment = new Equipment();
        this.maxRep = null;
        this.rounds = null;
        this.percent = null;
        this.roundUp = null;
        this.results = null;
    }
    isLbs(){return 'boolean'} // needs
    setLbs(bool){}
    
    getPlates(){return 'object'} // needs
    getAvailablePlates(){ return 'object'}
    togglePlate(index){}
    updatePlateSets(num){}
    
    getMaxRep(){return 'number'}
    setMaxRep(num){}
    
    useClamps(){return 'boolean'}
    toggleClamps(){}
    updateClampsWeight(num){}
    getClampsWeight(){return 'number'}
    
    useRounds(){return 'boolean'}
    toggleRounds(){}
    addRound(num){}
    removeRound(index){}
    updateRound(index, num){}
    
    usePercent(){return 'boolean'}
    togglePercent(){}
    setPercent(num){}
    
    useRoundUp(){return 'boolean'}
    toggleRoundUp(){}
    
    getBar(){return 'object'}
    setBar(type){}
    
    // - - - - - - - - - - - - - - - - 
    getResults(){
        let rounds = [];
        
        for(let round of this.rounds.get()){
            // 90% / 145 then / 2 then round to nearest 1/10
            let goalTotal = this.getTotalPerSide(round); // num
            let plates = this.getPlatesUsed(goalTotal); // obj
            let actualTotal = this.calculatePlates(plates); // num
            let diffrence = goalTotal - actualTotal * 2;
            rounds.push({ goalTotal, actualTotal, plates, diffrence });
        }
        let counter = 0;
        while(rounds.length > 1 && rounds.length < counter){
            rounds[0].toNext = this.get
        }
        
        // for each set
            // get goal total 
            // get plates
            // get actual total
            // get diffrence
       
       // while rounds.length >1 && rounds.length != counter
            // add next
        
        
        // for each rounds
            // add all plates together. 
        
        
        return {
            rounds: [
                {
                    goalTotal: 190, 
                    actualTotal: 145,
                    diffrence: -5, 
                    plates: [
                        {
                            url: 'url',
                            used: 1,
                            weight: 45,
                            
                        }
                    ],
                    toNext:{
                        remove: [plates],
                        add: [plates]
                    }
                    
                },
                {
                    // same
                }
            ]
        }
    }
    
}

// need 
// islbs
// percentage
