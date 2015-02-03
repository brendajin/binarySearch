describe("binarySearch", function() {
  var myEvenArray = [0, 10, 13, 15, 21, 29],
      myOddArray = [0, 10, 13, 15, 21, 29, 33],
      mySmallArray = [0, 10, 13],
      mySmallerArray = [0, 10],
      mySmallestArray = [0],
      myEmptyArray = [];

  describe("iterative strategy", function() {
    describe("should return the index of an element in an array if it exists", function() {
      it("at the beginning", function() {
        expect(binarySearchIterative(myEvenArray, 0)).toEqual(0);
        expect(binarySearchIterative(myOddArray, 0)).toEqual(0);
        expect(binarySearchIterative(mySmallArray, 0)).toEqual(0);
        expect(binarySearchIterative(mySmallerArray, 0)).toEqual(0);
        expect(binarySearchIterative(mySmallestArray, 0)).toEqual(0);
      });

      it("in the middle", function() {
        for(var i = 1; i < myEvenArray.length - 1; i++){
          expect(binarySearchIterative(myEvenArray, myEvenArray[i])).toEqual(i)
        }
        for(var i = 1; i < myOddArray.length - 1; i++) {
          expect(binarySearchIterative(myOddArray, myOddArray[i])).toEqual(i);
        }
        for(var i = 1; i < mySmallArray.length - 1; i++) {
          expect(binarySearchIterative(mySmallArray, mySmallArray[i])).toEqual(i);
        }
      });

      it("at the end", function() {
        expect(binarySearchIterative(myEvenArray, myEvenArray[myEvenArray.length - 1])).toEqual(myEvenArray.length - 1);
        expect(binarySearchIterative(myOddArray, myOddArray[myOddArray.length - 1])).toEqual(myOddArray.length - 1);
        expect(binarySearchIterative(mySmallArray, mySmallArray[mySmallArray.length - 1])).toEqual(mySmallArray.length - 1);
        expect(binarySearchIterative(mySmallerArray, mySmallerArray[mySmallerArray.length - 1])).toEqual(mySmallerArray.length - 1);
        expect(binarySearchIterative(mySmallestArray, mySmallestArray[mySmallestArray.length - 1])).toEqual(mySmallestArray.length - 1);
      });
    });

    describe("should return -1 if an element cannot be found in an array", function() {
      it("because it is too high", function() {
        expect(binarySearchIterative(myEvenArray, 211)).toEqual(-1);
        expect(binarySearchIterative(myOddArray, 211)).toEqual(-1);
        expect(binarySearchIterative(mySmallArray, 211)).toEqual(-1);
        expect(binarySearchIterative(mySmallerArray, 211)).toEqual(-1);
        expect(binarySearchIterative(mySmallestArray, 211)).toEqual(-1);
        expect(binarySearchIterative(myEmptyArray, 211)).toEqual(-1);
      });

      it("because it is too low", function() {
        expect(binarySearchIterative(myEvenArray, -20)).toEqual(-1);
        expect(binarySearchIterative(myOddArray, -20)).toEqual(-1);
        expect(binarySearchIterative(mySmallArray, -20)).toEqual(-1);
        expect(binarySearchIterative(mySmallerArray, -20)).toEqual(-1);
        expect(binarySearchIterative(mySmallestArray, -20)).toEqual(-1);
        expect(binarySearchIterative(myEmptyArray, -20)).toEqual(-1);
      });

      it("even if it is in the middle", function() {
        expect(binarySearchIterative(myEvenArray, 2)).toEqual(-1);
        expect(binarySearchIterative(myOddArray, 2)).toEqual(-1);
        expect(binarySearchIterative(mySmallArray, 2)).toEqual(-1);
        expect(binarySearchIterative(mySmallerArray, 2)).toEqual(-1);
        expect(binarySearchIterative(mySmallestArray, 2)).toEqual(-1);
        expect(binarySearchIterative(myEmptyArray, 2)).toEqual(-1);
      });
    });
  });

  describe("recursive strategy", function() {
    describe("should return the index of an element in an array if it exists", function() {
      it("at the beginning", function() {
        expect(binarySearchRecursive(myEvenArray, 0)).toEqual(0);
        expect(binarySearchRecursive(myOddArray, 0)).toEqual(0);
        expect(binarySearchRecursive(mySmallArray, 0)).toEqual(0);
        expect(binarySearchRecursive(mySmallerArray, 0)).toEqual(0);
        expect(binarySearchRecursive(mySmallestArray, 0)).toEqual(0);
      });

      it("in the middle", function() {
        for(var i = 1; i < myEvenArray.length - 1; i++){
          expect(binarySearchRecursive(myEvenArray, myEvenArray[i])).toEqual(i)
        }
        for(var i = 1; i < myOddArray.length - 1; i++) {
          expect(binarySearchRecursive(myOddArray, myOddArray[i])).toEqual(i);
        }
        for(var i = 1; i < mySmallArray.length - 1; i++) {
          expect(binarySearchRecursive(mySmallArray, mySmallArray[i])).toEqual(i);
        }
      });

      it("at the end", function() {
        expect(binarySearchRecursive(myEvenArray, myEvenArray[myEvenArray.length - 1])).toEqual(myEvenArray.length - 1);
        expect(binarySearchRecursive(myOddArray, myOddArray[myOddArray.length - 1])).toEqual(myOddArray.length - 1);
        expect(binarySearchRecursive(mySmallArray, mySmallArray[mySmallArray.length - 1])).toEqual(mySmallArray.length - 1);
        expect(binarySearchRecursive(mySmallerArray, mySmallerArray[mySmallerArray.length - 1])).toEqual(mySmallerArray.length - 1);
        expect(binarySearchRecursive(mySmallestArray, mySmallestArray[mySmallestArray.length - 1])).toEqual(mySmallestArray.length - 1);
      });
    });

    describe("should return -1 if an element cannot be found in an array", function() {
      it("because it is too high", function() {
        expect(binarySearchRecursive(myEvenArray, 211)).toEqual(-1);
        expect(binarySearchRecursive(myOddArray, 211)).toEqual(-1);
        expect(binarySearchRecursive(mySmallArray, 211)).toEqual(-1);
        expect(binarySearchRecursive(mySmallerArray, 211)).toEqual(-1);
        expect(binarySearchRecursive(mySmallestArray, 211)).toEqual(-1);
        expect(binarySearchRecursive(myEmptyArray, 211)).toEqual(-1);
      });

      it("because it is too low", function() {
        expect(binarySearchRecursive(myEvenArray, -20)).toEqual(-1);
        expect(binarySearchRecursive(myOddArray, -20)).toEqual(-1);
        expect(binarySearchRecursive(mySmallArray, -20)).toEqual(-1);
        expect(binarySearchRecursive(mySmallerArray, -20)).toEqual(-1);
        expect(binarySearchRecursive(mySmallestArray, -20)).toEqual(-1);
        expect(binarySearchRecursive(myEmptyArray, -20)).toEqual(-1);
      });

      it("even if it is in the middle", function() {
        expect(binarySearchRecursive(myEvenArray, 2)).toEqual(-1);
        expect(binarySearchRecursive(myOddArray, 2)).toEqual(-1);
        expect(binarySearchRecursive(mySmallArray, 2)).toEqual(-1);
        expect(binarySearchRecursive(mySmallerArray, 2)).toEqual(-1);
        expect(binarySearchRecursive(mySmallestArray, 2)).toEqual(-1);
        expect(binarySearchRecursive(myEmptyArray, 2)).toEqual(-1);
      });
    });
  });
});
