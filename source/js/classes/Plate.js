export default class Plate {
    constructor(weight, available, image, isPounds) {
        this.weight = weight;
        this.available = available;
        this.img = image;
        this.isPounds = isPounds;
    }
    getUnit(){
      return this.isPounds ? 'Lbs' : 'Kg';
    }
}