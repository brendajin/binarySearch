describe("binarySearch", function() {
  var myArray = [0, 10, 13, 15, 21, 29];

  describe("should return the index of an element in an array if it exists", function() {

    it("at the beginning", function() {
      expect(binarySearch(myArray, 0)).toEqual(0);
    });
    
    it("in the middle", function() {
      expect(binarySearch(myArray, 13)).toEqual(2);
    });

    it("at the end", function() {
      expect(binarySearch(myArray, 29)).toEqual(myArray.length - 1);
    });
  });

  it("should return false if an element cannot be found in an array", function() {
    expect(binarySearch(myArray, 2)).toEqual(false);
  });

});
