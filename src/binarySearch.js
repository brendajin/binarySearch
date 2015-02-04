function binarySearchIterative(array, elem) {
	// set initial values
	var rangeStart = 0,
		rangeEnd = array.length,
		rangeLength = rangeEnd - rangeStart,
		rangeMid = parseInt((rangeLength)/2, 10),
		index = 0 + rangeMid;

	if(array.length < 1 || elem < array[0] || elem > array[array.length - 1]) {
		return -1;
	}

	while(rangeLength >= 1) {
		// check whether we have found the element or checked all the elements
		if(array[index] == elem) { // found the element
			return index;
		} 

		// if we haven't found it
		if(array[index] > elem){ // if we need to search below
			rangeEnd = index;
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

function recurse(min, max, array, elem) {
	var mid = Math.floor((max+min)/2);

	if (array[mid] == elem) {
		return mid;
	} else if (max - min > 0 && array[mid] > elem) {
		max = mid -1;
		return recurse(min, max, array, elem);
	} else if(max - min > 0 && array[mid] < elem) {
		min = mid + 1;
		return recurse(min, max, array, elem);
	} else {
		return -1;
	}
}

function binarySearchRecursive(array, elem) {
	var min = 0,
		max = array.length - 1;

	if(array.length == 0 || array[0] > elem || array[array.length - 1] < elem) {
		return -1;
	} else {
		return recurse(min, max, array, elem);
	}
}

