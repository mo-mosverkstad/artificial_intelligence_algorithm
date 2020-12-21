var targetText = "house2";

function comparator(a, b) {
  if (a.score < b.score) return -1;
  if (a.score > b.score) return 1;
  return 0;
}

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

// note: variable j (text length) is fixed at 6

function generatePopulation(quantity, chromosomeSize){
    var p = [];
    for (i = 0; i < quantity; i++){
        var chromosome = [];
        for (j = 0; j < chromosomeSize; j++){
            chromosome.push(getRandomAscii());
        }
        p.push({genes: chromosome, score: 0});
    }
    return p;
}

// basic functions
function sigma(a){
    var result = 0;
    for (var i = 0; i < a.length; i++){
        result = result + a[i];
    }
    return result;
}

function calculateScore(chromosome, targetC){
    var score = 0;
    for (var i = 0; i < chromosome.length; i++){
        score = score + Math.abs(chromosome[i] - targetC[i])
    }
    return score;
}

function sortPopulation(p){
    p.sort(comparator);
}


function setScore(p, t){
    for (var i = 0; i < p.length; i++){
        p[i].score = calculateScore(p[i].genes, t);
    }
}

function reproduce(chromosome1, chromosome2){
    
}

function crossOver(p){
    for (var i = 0; i < (p.length / 2); i = i + 2){
        var j = i + 1;
        console.log("i :" + i + ", j :" + j);
    }
}


// processing area
var target = generateTarget(targetText);
console.log(target);
var population = generatePopulation(6, targetText.length);
setScore(population, target);
sortPopulation(population);
var newGeneration = crossOver(population);

// test area

console.log(population);
//console.log();
//console.log(calculateDifference([15, 25, 58], [25, 2, 11]));
//console.log(sigma([2, 5, 8, 29, 12]));