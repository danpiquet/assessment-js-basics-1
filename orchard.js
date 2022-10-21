///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
//i thought to use math.max here to make sure to iterate as much as the array with the most elements, but given the constant nature of the number of days of the week, I selected one of the arrays for the quantity of iterations.
let totalAcres = 0;
for(i = 0;i < fujiAcres.length; i++){
    totalAcres += fujiAcres[i]
    totalAcres += galaAcres[i]
    totalAcres += pinkAcres[i]
}
console.log(totalAcres)



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
// again, I used the length of only one of these arrays because the days of the week are constant
let averageDailyAcres = totalAcres / fujiAcres.length
console.log(averageDailyAcres)




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
while(days < 7){
    acresLeft -= averageDailyAcres
    days++
    console.log(acresLeft)
}
console.log(days)



// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
// rather than hard code 6.5 in for the yield in each of the push methods in the for loop, I chose to create a variable called yield.
let yield = 6.5

let fujiTons = []
let galaTons = []
let pinkTons = []

for(i = 0; i < fujiAcres.length; i++){
    fujiTons.push(fujiAcres[i] * yield)
    galaTons.push(galaAcres[i] * yield)
    pinkTons.push(pinkAcres[i] * yield)
}
console.log(fujiTons);
console.log(galaTons);
console.log(pinkTons);





// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
// set pounds variables to 0 before calculating
// rather than add the tons first and then convert, I converted inside of the for loop before adding += to each of the pounds variables
let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

const tonsToPoundsFactor = 2000

for(i = 0; i < fujiTons.length; i++){
fujiPounds += (fujiTons[i] * tonsToPoundsFactor)
galaPounds += (galaTons[i] * tonsToPoundsFactor)
pinkPounds += (pinkTons[i] * tonsToPoundsFactor)

}
console.log(`Fuji pounds: ${fujiPounds}, Gala Pounds: ${galaPounds}, Pink Pounds: ${pinkPounds}.`)







// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE
// I created a constant variable to format the output to USD to make it easier to read.
const usdFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})
let fujiProfit = fujiPounds * fujiPrice / 100
let galaProfit = galaPounds * galaPrice / 100
let pinkProfit = pinkPounds * pinkPrice / 100

console.log(`Your profit on the Fuji apple harvest is ${usdFormatter.format(fujiProfit)}`)
console.log(`Your profit on the Gala apple harvest is ${usdFormatter.format(galaProfit)}`)
console.log(`Your profit on the Pink apple harvest is ${usdFormatter.format(pinkProfit)}`)




// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
// used my above formatter const to make the output easier to read.
let totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log(`Ding ding ding! It's payday! Your total profit is ${usdFormatter.format(totalProfit)}`)