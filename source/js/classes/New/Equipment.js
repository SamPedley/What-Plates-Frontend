export default class Equipment {
    
  constructor() {
      this.lbs = true;
      this.plates = null;
      this.bar = null; 
      this.clamps = null;
      this.generateEquipment();
   }
   
   generateEquipment(){
     this.plates = new Plates(this.lbs);
     this.bar = new Bar(this.lbs);
     this.clamps = new Clamps(this.lbs);
   }
   
   isLbs(){ return this.lbs; }
   
   toggleLbs() { 
     this.lbs = !this.lbs;
     this.generateEquipment();
    }
   
  
}