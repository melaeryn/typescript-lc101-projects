// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
var spacecraftName = "Determination";
var speedMPH = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = .621;
// Part 2: Print Days to Mars
var milesToMars = kilometersToMars * milesPerKilometer;
var hoursToMars = milesToMars / speedMPH;
var daysToMars = hoursToMars / 24;
// Code an output statement here (use a template literal):
//console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);
// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kilometersAway) {
    var milesToLocation = kilometersAway * milesPerKilometer;
    var hoursToLocation = milesToLocation / speedMPH;
    return hoursToLocation / 24;
}
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
console.log(spacecraftName + " would take " + getDaysToLocation(kilometersToMars) + " days to get to Mars.\n" + spacecraftName + " would take " + getDaysToLocation(kilometersToTheMoon) + " days to get to the Moon.");
// Part 4: Create a Spacecraft Class
//class Spacecraft{
// milesPerKilometer: number = .621;
//name: string;
// speedMph: number;
// constructor(givenName: string, speedMPH: number){
//    this.name = givenName;
//     this.speedMph = speedMPH;
// }
//}
// Create an instance of the class here:
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
