export const ui = {
  menuOpen: false
}

export const userSettings = {
  usingLbs: true,
  showConversion: false,
  roundUp: false,
  usePercent: true
}

export const sets = [
  { total: 45, percent: 100 },
  { total: 55, percent: 100 }
]
export const bars = [
  { name: 'Mens', isLbs: true, weight: 45, active: true },
  { name: 'Womens', isLbs: true, weight: 35, active: false },
  { name: 'Training', isLbs: true, weight: 15, active: false },
  { name: 'Mens', isLbs: false, weight: 20, active: false },
  { name: 'Womens', isLbs: false, weight: 15, active: false },
  { name: 'Training', isLbs: false, weight: 10, active: false }
]

// Based off Rouge plates
export const plateColors = {
  red: '#B44846', // 55lbs
  blue: '#005182', // 45lbs
  yellow: '#E9B501', // 35lbs
  green: '#308E35' // 25lbs
}

export const plates = [
  // Lbs Plates
  { weight: 55, isLbs: true, active: false },
  { weight: 45, isLbs: true, active: true },
  { weight: 35, isLbs: true, active: true },
  { weight: 25, isLbs: true, active: true },
  { weight: 15, isLbs: true, active: true },
  { weight: 10, isLbs: true, active: true },
  { weight: 5, isLbs: true, active: true },
  { weight: 2.5, isLbs: true, active: true },
  { weight: 1.25, isLbs: true, active: false },
  // KG Plates
  { weight: 25, isLbs: false, active: true },
  { weight: 20, isLbs: false, active: true },
  { weight: 15, isLbs: false, active: true },
  { weight: 10, isLbs: false, active: true },
  { weight: 5, isLbs: false, active: true },
  { weight: 2, isLbs: false, active: false },
  { weight: 2.5, isLbs: false, active: false },
  { weight: 1.5, isLbs: false, active: true },
  { weight: 1.25, isLbs: false, active: true },
  { weight: 1, isLbs: false, active: true },
  { weight: 0.75, isLbs: false, active: false },
  { weight: 0.5, isLbs: false, active: false },
  { weight: 0.25, isLbs: false, active: false }
]
