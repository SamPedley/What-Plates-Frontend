// Action is an object and needs to have an index and an updateTo property
export const updateObject = (orignal, index, action) => {
  if (index !== action.index) {
    return orignal
  }
  return {...orignal, ...action.updateTo}
}

// Takes an array of objects and a action object with an index and updateTo property
export const updateObjectInArray = (state, action) => state
  .map((set, index) => updateObject(set, index, action))
