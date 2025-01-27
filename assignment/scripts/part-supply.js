console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
let partsNeeded=40
console.log('1. Number of partsNeeded:', partsNeeded );

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
supplyChanges=[3, 5, -6, 0, 7, 11]
console.log('2. Array of supplyChanges:', supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:', supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item:', supplyChanges.pop(11));

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.', supplyChanges.push(25));

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
console.log ('6. Showing supply changes'); 
for( let i=0; i<supplyChanges.length; i++) {
    x=supplyChanges[i];
//    if it is a positive number (greater than 0), log 'Added x parts.' 
    if (x>0) {console.log('added', x, 'parts')};
//    if the value is 0, log 'No Change.'
    if (x === 0) {console.log('No Change')};
//    if the value is negative, format the log as 'Removed x parts.'
    if (x <0) {console.log('Removed', x*-1, 'parts')}
}; 
// I included the *-1 so it read clearer, removed the double negative in the sentence. Wouldn't want to do this if there were more maths happening. 
//console.log('6. Showing supplyChanges...');


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.

for ( parts of supplyChanges)//conditional 
{console.log ('7. Showing Supply Change')
    if (parts >0) {console.log(parts, 'added')};
    if (parts === 0) {console.log(parts, 'No Change')};
    if (parts <0) {console.log(parts, 'Removed')};
}//actions to take


// 8. Rewrite the `for` loop from #6 as a `while` loop.

let index= 0
const max=(supplyChanges[supplyChanges.length-1])//max is length of array minus 1

while (index<max) //conditional
{   // while the conditional is true run this thing
    if (supplyChanges[index] >0) {console.log('added',supplyChanges[index],'parts')};  //if it is a positive number (greater than 0), log 'Added x parts.' 
    if (supplyChanges[index] === 0) {console.log('No Change')};//if the value is 0, log 'No Change.'
    if (supplyChanges[index] <0) {console.log('Removed', supplyChanges[index], 'parts')};//if the value is negative, format the log as 'Removed x parts.'
    index++}


// 9. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.

let inventory=0 //need to set the value of all our inventory

for(let i=0; i<supplyChanges.length; i++)//conditional
{inventory += supplyChanges[i];} //action to take.... add totals in the supply change array to inventory
console.log('9. inventory amount', inventory);//console log the total.
