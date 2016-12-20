const NUM = 0;

const Messages = {
    errorText: ''
}
const Active = 
    {
        maxRep: 140,
        
        plates: {
           [
               {
                   image: 'url',
                   weight: 45,
                   use: true, 
                   sets: 0
                   
               }
           ]
        },
        lbs: false,
        bar: {
          type: 'mens',
          custom: false,
          customWeight: 0  
        },
        clamps: {
            use: false, 
            weight: 2.5
        },
        rounds:{
            use: false,
            // rounds at will allow for both percentage and 
            // straight weight calculations
            at: [120, 150]
            
        },
        percentage: {
            use: false, 
            percent: 0
        }
        
        roundUp: false, 
        
    }
    
const Stored = [
    Active,
    Active
]

