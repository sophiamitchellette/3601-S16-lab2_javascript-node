// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};

exports.firstLetter = function(str){
    return str.substring(0,1);
};

//converts text to numerical decimal
var gradeToNumber = function(gr){
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

//takes in the three grades and their respective credit hours and returns GPA
exports.calculateGPA = function(gr1, gr2, gr3, cr1, cr2, cr3){
    return Math.round(((gradeToNumber(gr1)*parseInt(cr1, 10))+(gradeToNumber(gr2)*parseInt(cr2, 10))+(gradeToNumber(gr3)*parseInt(cr3, 10)))/(parseInt(cr1, 10)+parseInt(cr2, 10)+parseInt(cr3, 10))*100)/100;
};
