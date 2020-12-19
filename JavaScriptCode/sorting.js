var myArray = [[2, 3, 5, 6, 9, 8, 7],
               [5, 2, 1, 2, 3, 4, 5],
               [2, 3, 3, 4, 5, 6, 1],
               [9, 2, 1, 2, 3, 2, 9],
               [2, 3, 5, 6, 7, 8, 9]];
         
function Comparator(a, b) {
  if (a[6] < b[6]) return -1;
  if (a[6] > b[6]) return 1;
  if (a[6] == b[6]) return 0;
  return 0;
}


myArray = myArray.sort(Comparator);
console.log(myArray);



var yourArray = [ {genes: [2, 3, 5, 6, 9, 8], score: 7},
                  {genes: [5, 2, 1, 2, 3, 4], score: 5},
                  {genes: [2, 3, 3, 4, 5, 6], score: 1},
                  {genes: [9, 2, 1, 2, 3, 2], score: 9},
                  {genes: [2, 3, 5, 6, 7, 8], score: 9}];

function yourComparator(a, b) {
  if (a.score < b.score) return -1;
  if (a.score > b.score) return 1;
  return 0;
}

yourArray = yourArray.sort(yourComparator);
console.log("yourArray", yourArray);