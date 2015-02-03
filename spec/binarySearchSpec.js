describe("binarySearch", function() {
  var myEvenArray = [0, 10, 13, 15, 21, 29];
  var myOddArray = [0, 10, 13, 15, 21, 29, 33];
  var mySmallArray = [0, 10, 13];
  var mySmallerArray = [0, 10];
  var mySmallestArray = [0];
  var myEmptyArray = [];

  describe("should return the index of an element in an array if it exists", function() {

    it("at the beginning", function() {
      expect(binarySearch(myEvenArray, 0)).toEqual(0);
      expect(binarySearch(myOddArray, 0)).toEqual(0);
      expect(binarySearch(mySmallArray, 0)).toEqual(0);
      expect(binarySearch(mySmallerArray, 0)).toEqual(0);
      expect(binarySearch(mySmallestArray, 0)).toEqual(0);
    });

    it("in the middle", function() {
      expect(binarySearch(myEvenArray, 13)).toEqual(2);
      expect(binarySearch(myOddArray, 13)).toEqual(2);
      expect(binarySearch(mySmallArray, 13)).toEqual(2);
    });

    it("at the end", function() {
      expect(binarySearch(myEvenArray, myEvenArray[myEvenArray.length - 1])).toEqual(myEvenArray.length - 1);
      expect(binarySearch(myOddArray, myOddArray[myOddArray.length - 1])).toEqual(myOddArray.length - 1);
      expect(binarySearch(mySmallArray, mySmallArray[mySmallArray.length - 1])).toEqual(mySmallArray.length - 1);
      expect(binarySearch(mySmallerArray, mySmallerArray[mySmallerArray.length - 1])).toEqual(mySmallerArray.length - 1);
      expect(binarySearch(mySmallestArray, mySmallestArray[mySmallestArray.length - 1])).toEqual(mySmallestArray.length - 1);
    });
  });

  describe("should return -1 if an element cannot be found in an array", function() {
    it("because it is too high", function() {
      expect(binarySearch(myEvenArray, 211)).toEqual(-1);
      expect(binarySearch(myOddArray, 211)).toEqual(-1);
      expect(binarySearch(mySmallArray, 211)).toEqual(-1);
      expect(binarySearch(mySmallerArray, 211)).toEqual(-1);
      expect(binarySearch(mySmallestArray, 211)).toEqual(-1);
      expect(binarySearch(myEmptyArray, 211)).toEqual(-1);
    });

    it("because it is too low", function() {
      expect(binarySearch(myEvenArray, -20)).toEqual(-1);
      expect(binarySearch(myOddArray, -20)).toEqual(-1);
      expect(binarySearch(mySmallArray, -20)).toEqual(-1);
      expect(binarySearch(mySmallerArray, -20)).toEqual(-1);
      expect(binarySearch(mySmallestArray, -20)).toEqual(-1);
      expect(binarySearch(myEmptyArray, -20)).toEqual(-1);
    });

    it("even if it is in the middle", function() {
      expect(binarySearch(myEvenArray, 2)).toEqual(-1);
      expect(binarySearch(myOddArray, 2)).toEqual(-1);
      expect(binarySearch(mySmallArray, 2)).toEqual(-1);
      expect(binarySearch(mySmallerArray, 2)).toEqual(-1);
      expect(binarySearch(mySmallestArray, 2)).toEqual(-1);
      expect(binarySearch(myEmptyArray, 2)).toEqual(-1);
    });
  });

});
