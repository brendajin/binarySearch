function binarySearch(array, elem) {

	// set initial values
	var rangeStart = 0,
		rangeEnd = array.length,
		rangeLength = rangeEnd - rangeStart,
		halfway = parseInt((rangeLength)/2, 10),
		distFrom0 = 0 + halfway;

	while(rangeLength > 1) {
		// check whether we have found the element or checked all the elements
		if(array[distFrom0] == elem) { // found the element
			return distFrom0;
		} else if(array[distFrom0 - 1] == elem) { // found the element
			return distFrom0 - 1;
		} else if(rangeLength <= 2) { // checked all the elements
			return false;
		}

		// if we haven't found it, and if we haven't checked them all
		if(array[distFrom0] > elem){ // if we need to search below
			rangeEnd = distFrom0 - 1;
		} else { // if we need to search above
			rangeStart = distFrom0 + 1;
		}

		// get the new range
		rangeLength = rangeEnd - rangeStart;

		// find the halfway point
		halfway = parseInt((rangeLength)/2, 10);

		// get the distance from 0
		distFrom0 = rangeStart + halfway;
	}
}