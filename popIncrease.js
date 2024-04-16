// Task 8

// In 2023 the current population of the UK is 67,765,900.  
// The current annual % increase is 0.3%. 
// Assuming that stays the same, what year will the UK population reach 80,000,000? 
// Write an algorithm to output the projected yearly population and stop when 80,000,000 is reached.

let years = 0
let pop = 67765900

do {
    years ++
    let increase = pop * (0.3 / 100)
    pop += increase
} while ( pop <= 80000000)

console.log (`The population reached 80,000,000 in ${years} year(s)`)
