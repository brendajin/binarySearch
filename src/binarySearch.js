function binarySearch(array, elem) {

	// set initial values
	var rangeStart = 0,
		rangeEnd = array.length,
		rangeLength = rangeEnd - rangeStart,
		rangeMid = parseInt((rangeLength)/2, 10),
		index = 0 + rangeMid;

	if(array.length = 0 || elem < array[0] || elem > array[array.length - 1]) {
		return -1;
	}

	while(rangeLength >= 1) {
		// check whether we have found the element or checked all the elements
		if(array[index] == elem) { // found the element
			return index;
		} else if(array[index - 1] == elem) { // found the element
			return index - 1;
		} else if(rangeLength <= 2) { // checked all the elements
			return -1;
		}

		// if we haven't found it, and if we haven't checked them all
		if(array[index] > elem){ // if we need to search below
			rangeEnd = index - 1;
		} else { // if we need to search above
			rangeStart = index + 1;
		}

		// get the new range
		rangeLength = rangeEnd - rangeStart;

		// find the rangeMid point
		rangeMid = parseInt((rangeLength)/2, 10);

		// get the distance from 0
		index = rangeStart + rangeMid;
	}

	return -1;
}