function swap(array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

function selectionSort(array, comparator) {
    if (comparator == undefined) {
        comparator = function(a, b) { return a - b;};
    }
    
    for (var i = 0; i < array.length - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < array.length; j ++) {
            if (comparator(array[j], array[minIndex]) < 0) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            swap(array, minIndex, i);
        }
    }
    return array;
}

function bubbleSort(array) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}