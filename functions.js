export let movieFunction = (movieName, location)=>{

    console.log("Tickets for " + movieName + " generated at " + location);

};


export let poundsToKilos = (pounds) => {
    let kilos = 0;
    kilos = pounds *0.453;
    return pounds + " pounds converted to kilos is the equivalent of " + kilos + "kg";
}


export let raisedToFunction = (number, raiseByNumber) => {
    let total = 0 
    total = Math.pow(number, raiseByNumber);
    return number + " raised by " + raiseByNumber + " is equal to " + total;
}


export let factorialAndRaiseFunction = (number) => {

    let factorial = 1;
    let division = 0;

    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }


    division = factorial / number;
    return "The factorial of " + number + " is " + factorial + " divided by " + number + " is equial to " + division + " and raised by " + number + " is equal to " + Math.pow(division, number);
}
