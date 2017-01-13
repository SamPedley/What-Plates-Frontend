export const ui = {
  menuOpen: false
}

export const userSettings = {
  usingLbs: true,
  showConversion: false,
  roundUp: false
}

export const sets = [
  { total: 0 }
]
export const bars = [
  { name: 'Mens', inLbs: 45, inKg: 20 },
  { name: 'Womens', inLbs: 35, inKg: 15 },
  { name: 'Training', inLbs: 15, inKg: 10 }
]

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
