import { EventEmitter } from 'events';
import Weight from '../classes/Weight.js'
import dispatcher from '../AppDispatcher';
import _ from 'lodash';
var CHANGE_EVENT = 'change';

class WeightStore extends EventEmitter {
	constructor(){
		super();
		this.weight = this.getNewWeight();
		this.list = [];
	}
	emitChange() { this.emit(CHANGE_EVENT); }
	addChangeListener(callback) { this.on(CHANGE_EVENT, callback); }
	removeChangeListener(callback) { this.removeListener(CHANGE_EVENT, callback);	}

	getNewWeight(){
		return new Weight();
	}

	getWeight(){
		return this.weight;
	}
	getList(){
		return this.list;
	}

	handleActions(action){
		switch (action.type) {
			case 'UPDATE_TOTAL_WEIGHT': {
				if(action.weight <= 10000)
				this.weight.total = action.weight;
				if(action.weight > 10000){
					this.weight.errorText = 'Math is too hard!';
				} else if(action.weight < this.weight.getBarWeight()){
					this.weight.errorText = 'Do you even lift bro?';
				} else {
						this.weight.errorText = '';
			}
				this.emitChange();
			}
			break;
			case 'UPDATE_PERCENTAGE': {
				this.weight.percentage = action.percentage;
				if(action.percentage >= 1000){
					this.weight.percentageErrorText = 'OVER 1,000%?!';
				} else if(action.percentage <= 0){
					this.weight.percentageErrorText = 'Less than 0%?!';
				} else {
						this.weight.percentageErrorText = '';
			}
				this.emitChange();
			}
			break;
			case 'UPDATE_BAR': {
				this.weight.bar = action.bar;
				this.emitChange();
			}
			break;
			case 'TOGGLE_SHOW_PERCENTAGE': {
				this.weight.showPercentage = !this.weight.showPercentage;
				this.weight.percentageErrorText = '';
				this.weight.percentage = '';
				this.emitChange();
			}
			break;
			case 'UPDATE_WEIGHT_TYPE': {
				this.weight.isPounds = action.isPounds;
				this.emitChange();
			}
			break;
			case 'TOGGLE_AVAILABLE_WEIGHT': {
				this.weight.plates.toggleAvailability(action.index);
				this.emitChange();
			}
			break;
			case 'TOGGLE_ROUND': {
				this.weight.roundUp = !this.weight.roundUp;
				this.emitChange();
			}
			break;
			case 'SAVE_CURRENT': {
				if(this.weight.total !== null)
					this.list.push( _.cloneDeep(this.weight) );
				if(this.list.length > 10)
					this.list.splice(0,1);
				this.weight = this.getNewWeight();
				this.emitChange();
			}
			break;
			case 'CLEAR_CURRENT': {
				this.weight = this.getNewWeight();
				this.emitChange();
			}
			break;
			case 'SET_ACTIVE': {
				this.weight = null;
				this.weight = _.cloneDeep(this.list[action.active]);
				this.list.splice(action.active, 1);
				this.emitChange();
			}
			break;
			case 'REMOVE_FROM_LIST': {
				this.list.splice(action.item, 1);
				this.emitChange();
			}
			break;
			case 'TOGGLE_SHOW_CONVERSION': {
				this.weight.showConversion = !this.weight.showConversion;
				this.emitChange();
			}
			break;
			case 'TOGGLE_PLATE_UNITS': {
				this.weight.plates.toggleUnits();
				this.emitChange();
			}
			break;
			case 'UPDATE_SET': {
				this.weight.sets[action.key] = action.val;
				this.emitChange();
			}
			break;
			case 'REMOVE_SET': {
				if(this.weight.sets.length <= 1)
					this.weight.sets = [""];
				else
					this.weight.sets.splice(action.key,1);
				this.emitChange();
			}
			break;
			case 'ADD_NEW_SET': {
				this.weight.sets.push("");
				this.emitChange();
			}
			break;
			case 'TOGGLE_SETS': {
				this.weight.useSets = !this.weight.useSets;
				this.weight.total = "";
				this.weight.sets = [""];
				this.weight.errorText = '';
				this.emitChange();
			}
			break;
			case 'TOGGLE_CLIPS': {
				this.weight.useClips = !this.weight.useClips;
				this.emitChange();
			}
			break;
		}
	}
}

const weightStore = new WeightStore;
// weightStore.setMaxListeners(200);
dispatcher.register(weightStore.handleActions.bind(weightStore));
// EventEmitter.setMaxListeners(20);
export default weightStore;
