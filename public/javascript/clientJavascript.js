// Our javascript for the CLIENT side.
// This will run on the browser.

/**
 * Takes no arguments, and creates a javascript alert in the client's browser.
 */
var sendAlert = function(){
    alert("THIS IS AN ALERT!");
};

/**
 * Used for getting the length of a string. For example only, you won't likely need to use something like this...
 * DIFFERENT FROM THE stringLength function in the server side javascript!!!
 *
 * @param str  - the string to have its length returned
 * @returns {*}  - an integer, the length of the string
 */
var testStringLength = function(str){
    return str.length;
};


/**
 * Takes no arguments, returns the string "kittens"
 *
 * @returns {string}  - returns "kittens"
 */
var returnKittens = function(){
    return "kittens";
};

var remainder = function(int1,int2){
    return int1 % int2;
};

var gradetonumber = function(gr){
    if(gr == "A")
    {
        return 4.0;
    }
    if(gr == "A-")
    {
        return 3.66;
    }
    if(gr == "B+")
    {
        return 3.33;
    }
    if(gr == "B")
    {
        return 3.0;
    }
    if(gr == "B-")
    {
        return 2.66;
    }
    if(gr == "C+")
    {
        return 2.33;
    }
    if(gr == "C")
    {
        return 2.0;
    }
    if(gr == "C-")
    {
        return 1.66;
    }
    if(gr == "D+")
    {
        return 1.33;
    }
    if(gr == "D")
    {
        return 1.0;
    }
    if(gr == "D-")
    {
        return 0.66;
    }
    if(gr == "F")
    {
        return 0.0;
    }

};

var calculateGPA = function(gr1, gr2, gr3, cr1, cr2, cr3){
    return Math.round(((gradetonumber(gr1)*cr1)+(gradetonumber(gr2)*cr2)+(gradetonumber(gr3)*cr3))/(cr1+cr2+cr3)*100)/100;
};
