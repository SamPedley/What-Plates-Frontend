import dispatcher from '../AppDispatcher'

export function updateTotalWeight(weight){
	dispatcher.dispatch({
		type:'UPDATE_TOTAL_WEIGHT',
		weight
	})
}

export function updateBar(bar){
	dispatcher.dispatch({
		type:'UPDATE_BAR',
		bar
	})
}

export function toggleAvailabeWeight(index){
	dispatcher.dispatch({
		type:'TOGGLE_AVAILABLE_WEIGHT',
		index
	})
}

export function toggleRound(){
	dispatcher.dispatch({
		type:'TOGGLE_ROUND'
	})
}
export function updatePercentage(percentage){
	dispatcher.dispatch({
		type:'UPDATE_PERCENTAGE',
		percentage
	})
}
export function setActive(active){
	dispatcher.dispatch({
		type:'SET_ACTIVE',
		active
	})
}
export function toggleShowPercentage(){
	dispatcher.dispatch({
		type:'TOGGLE_SHOW_PERCENTAGE'
	})
}

export function saveCurrent(){
	dispatcher.dispatch({
		type:'SAVE_CURRENT'
	})
}
export function clearCurrent(){
	dispatcher.dispatch({
		type:'CLEAR_CURRENT'
	})
}


export function removeFromList(item){
	dispatcher.dispatch({
		type:'REMOVE_FROM_LIST',
		item
	})
}

export function toggleShowConversion(){
	dispatcher.dispatch({
		type:'TOGGLE_SHOW_CONVERSION'
	})
}

export function togglePlateUnits(){
	dispatcher.dispatch({
		type:'TOGGLE_PLATE_UNITS'
	})
}

export function toggleSets(){
	dispatcher.dispatch({
		type:'TOGGLE_SETS'
	})
}


export function toggleClips(){
	dispatcher.dispatch({
		type:'TOGGLE_CLIPS'
	})
}

export function addNewSet(){
	dispatcher.dispatch({
		type:'ADD_NEW_SET'
	})
}

export function updateSet(key,val){
	dispatcher.dispatch({
		type:'UPDATE_SET',
		key,
		val
	})
}

export function removeSet(key){
	dispatcher.dispatch({
		type:'REMOVE_SET',
		key
		})
}
