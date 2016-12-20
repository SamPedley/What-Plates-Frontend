const KgBar = {
    mens: 20,
    womens: 15, 
    training: 5
}
const LbsBar = {
    mens: 45,
    womens: 35,
    trainig: 15
}

export default class Bar {
    
    constructor(lbs = true){
      this.lbs = lbs;
      this.bar = 'mens';
    }
    
    setBar(name){
        if( Object.keys(KgBar).includes(name) )
            this.bar = name;
        else
            throw new Error('That is an invalid bar type.');
    }
    
    getWeight(){
        if(this.lbs)
            return LbsBar[this.bar];
        
        return KgBar[this.bar];
    }
  
}