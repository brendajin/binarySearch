function binarySearchIterative(array, elem) {
	// set initial values
	var min = 0,
		max = array.length - 1,
		mid;

	// don't iterate if the element is outside of bounds
	if(array.length < 1 || elem < array[min] || elem > array[max]) {
		return -1;
	}

	while(max >= min) {
		mid = parseInt((max + min)/2, 10);

		// check whether we have found the element or checked all the elements
		if(array[mid] == elem) { // found the element
			return mid;
		} else if(array[mid] > elem){ // if we need to search below
			max = mid - 1;
		} else { // if we need to search above
			min = mid + 1;
		}
	}

	return -1;
}

function recurse(min, max, array, elem) {
	var mid = Math.floor((max+min)/2);

	if (array[mid] == elem) {
		return mid;
	} else if (max > min && array[mid] > elem) {
		max = mid -1;
		return recurse(min, max, array, elem);
	} else if(max > min && array[mid] < elem) {
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

