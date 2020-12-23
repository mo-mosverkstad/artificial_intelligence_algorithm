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



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getRandomAscii() {
    return getRandomInt(0, 256);
}

function generateTarget(txt){
    var result = [];
    for (i = 0; i < txt.length; i++){
        result.push(txt.charCodeAt(i));
    }
    return result;
}


class Gene {
    constructor() {
        this.initialize();
    }
    
    initialize() {
        this.value = getRandomAscii();
    }
    
    toString() {
        return "Gene: " + this.value;
    }
}

class Chromosome {
    constructor(size, target) {
        this.size = size;
        this.genes = [];
        this.score = 0;
        this.target = target;
        this.initialize();
    }
    
    initialize() {
        for (var i = 0; i < this.size; i++) {
            this.genes.push (new Gene());
        }
    }
    
    setScore() {
        //???
    }
    
    toString() {
        var str = "chromosome: [";
        for (var i = 0; i < this.size; i++) {
            str += this.genes[i] + ", ";
        }
        return str + "]";
    }
}

var ch = new Chromosome(6);
console.log(ch.toString());