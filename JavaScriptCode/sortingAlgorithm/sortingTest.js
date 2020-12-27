var arrayInt = [2, 5, 6, 9, 1, 8, 7, 3, 3];
var arrayList = [[2, 3, 5, 6, 9, 8, 7],
                 [5, 2, 1, 2, 3, 4, 5],
                 [2, 3, 3, 4, 5, 6, 1],
                 [9, 2, 1, 2, 3, 2, 9],
                 [2, 3, 5, 6, 7, 8, 9]];
var arrayChromosoe = [ {genes: [2, 3, 5, 6, 9, 8], score: 7},
                       {genes: [5, 2, 1, 2, 3, 4], score: 5},
                       {genes: [2, 3, 3, 4, 5, 6], score: 1},
                       {genes: [9, 2, 1, 2, 3, 2], score: 9},
                       {genes: [2, 3, 5, 6, 7, 8], score: 9}];


function appendInDiv(divId, print) {
    var div = document.getElementById(divId);
    div.style.display = "block";
    div.innerText += print;
}

appendInDiv("selectionSortingResult", selectionSort(arrayInt));

function comparatorArrayList(a, b) {
    if (a[6] < b[6]) return -1;
    if (a[6] > b[6]) return 1;
    return 0;
}

function comparatorChromosome(a, b) {
    return a.score - b.score;
}

//appendInDiv("selectionSortingResult", selectionSort(arrayList, comparatorArrayList));
console.log(selectionSort(arrayList, comparatorArrayList));
console.log(selectionSort(arrayChromosoe, comparatorChromosome));


appendInDiv("bubbleSortingResult", bubbleSort(arrayInt));

var a = 3;
var b = 5;

console.log("Old: ", [3, 5]);
console.log("Swap with extra memory: ", swapWithExtraMemory(a, b));
console.log("Swap sum : ", swapSum(a, b));
console.log("Swap diff : ", swapDiff(a, b));

