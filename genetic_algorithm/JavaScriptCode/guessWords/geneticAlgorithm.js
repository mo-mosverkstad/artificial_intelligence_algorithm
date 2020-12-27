var targetText = "house2";
var population_quantity = 5000;

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

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
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
    return p.sort(comparator);
}


function setScore(p, t){
    for (var i = 0; i < p.length; i++){
        p[i].score = calculateScore(p[i].genes, t);
    }
}

function makeSegments (c, slices) {
    var cSegs = [];
    for (var i = 0; i < slices.length - 1; i++) {
        cSegs.push(c.slice(slices[i], slices[i+1]));
    }
    //console.log(cSegs);
    return cSegs;
}

function reproduce(c1, c2){
    var geneLength = c1.length;
    var slices = [0, getRandomInt(0, geneLength+1), getRandomInt(0, geneLength+1), getRandomInt(0, geneLength+1), geneLength];
    slices.sort();
    //console.log("slices: ", slices);
    var genSegs1 = makeSegments(c1, slices);
    var genSegs2 = makeSegments(c2, slices);

    var c3 = genSegs1[0].concat(genSegs2[1], genSegs1[2], genSegs2[3]);
    var c4 = genSegs2[0].concat(genSegs1[1], genSegs2[2], genSegs1[3]);
    //console.log("c3: ", c3);
    //console.log("c4: ", c4);
    return [c3, c4];
}

function crossOver(p){
    var newP = [];
    //console.log("Population length: ", p.length / 2);
    for (var i = 0; i < (p.length / 2); i++){
        var n = 2*i;
        var m = 2*i+1;
        // console.log("results", p[n].genes, p[m].genes);
        var [new1, new2] = reproduce(p[n].genes, p[m].genes)
        newP.push({genes: new1, score: 0});
        newP.push({genes: new2, score: 0});
    }
    return newP;
}

function convertToAscii(genes) {
    var strAscii = "";
    for (var g of genes) {
        strAscii += String.fromCharCode(g);
    }
    return strAscii;
}

// processing area
var target = generateTarget(targetText);
//console.log(target);
var population = generatePopulation(population_quantity, targetText.length);
setScore(population, target);
population = sortPopulation(population);

var generationNumber = 0;
var generationMax = 200;

while (population[0].score != 0 && generationNumber < generationMax){
    var newGeneration = crossOver(population);
    setScore(newGeneration, target);
    population = population.concat(newGeneration);
    population = sortPopulation(population);
    population = population.slice(0, population_quantity);
    appendInDiv("evolutionInfo", "Generation; " + generationNumber + "; result: " + convertToAscii(population[0].genes) + "; score: " + population[0].score);
    generationNumber++;
}
//console.log("result", population[0].genes);
appendInDiv("evolutionInfo", "Total generation number: " + generationNumber + "; result: " + convertToAscii(population[0].genes));

// test area

//console.log(population);
//console.log("results of new generation ", newGeneration);
//console.log();
//console.log(calculateDifference([15, 25, 58], [25, 2, 11]));
//console.log(sigma([2, 5, 8, 29, 12]));

function appendInDiv(divId, print) {
    var div = document.getElementById(divId);
    div.style.display = "block";
    div.innerText += "\n" + print;

}
