
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

