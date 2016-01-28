
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

    ////this test should fail.
    //edit: fixed it
    it('this test should fail!', function(){
        expect(returnKittens()).not.toBe("Not Kittens!");
    });

    //testing for remainder
    it('the remainder of 10 divided by 5 should be 0', function(){
       expect(remainder(10,5)).toEqual(0);
    });

    //testing for remainder
    it('the remainder of 11 divided by 5 should be 1', function(){
        expect(remainder(11,5)).toEqual(1);
    });



});

//testing for GPA Calculator
describe('testing for GPA calculator', function(){
    it('should return a 4.0', function(){
       expect(calculateGPA("A", "A", "A", 4, 5, 4)).toEqual(4.0);
    });

    it('should return a 3.0', function(){
        expect(calculateGPA("A", "B", "C", 4, 5, 4)).toEqual(3.0);
    });

    it('should return a 3.57', function(){
        expect(calculateGPA("A", "A-", "B", 4, 4, 4)).toEqual(3.57);
    });

    it('should return a 2.0', function(){
        expect(calculateGPA("B", "C", "D", 4, 5, 4)).toEqual(2.0);
    });

    it('should return a 0.0', function(){
        expect(calculateGPA("F", "F", "F", 5, 5, 3)).toEqual(0.0);
    });
});

