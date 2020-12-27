
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function comparator(a, b) {
  if (a.score < b.score) return -1;
  if (a.score > b.score) return 1;
  return 0;
}

function makeSegments (c, slices) {
    var cSegs = [];
    for (var i = 0; i < slices.length - 1; i++) {
        cSegs.push(c.slice(slices[i], slices[i+1]));
    }
    //console.log(cSegs);
    return cSegs;
}



function f(x){
    return 17*x%3120-1;
}

class Gene{
    constructor(){
        this.value = getRandomInt(0, 2);
    }
    
    toString(){
        return this.value.toString();
    }
    
}

class Chromosome{
    constructor(size){
        this.size = size;
        this.genes = [];
        this.score = 0;
        for (var i = 0; i < this.size; i++){
            this.genes.push(new Gene());
        }
    }
    
    toString(){
        var s = "";
        for (var g of this.genes){
            s = s + g.toString();
        }
        return s;
    }
    
    toInt(){
        return parseInt(this.toString(), 2);
    }
    
    setScore(){
        this.score = Math.abs(f(this.toInt()));
        //console.log("score: ", this.score);
    }
    
    crossOver(other){
        var slices = [0, getRandomInt(0, this.genes.length + 1), getRandomInt(0, this.genes.length + 1), this.genes.length];
        slices.sort(function(a, b){return a-b});
        
        //console.log("slices: ", slices);
        var genSegs1 = makeSegments(this.genes, slices);
        var genSegs2 = makeSegments(other.genes, slices);
        
        var new1Genes = genSegs1[0].concat(genSegs2[1], genSegs1[2]);
        var new2Genes = genSegs2[0].concat(genSegs1[1], genSegs2[2]);
        
        var new1 = new Chromosome();
        var new2 = new Chromosome();
        new1.genes = new1Genes;
        new2.genes = new2Genes;
        //console.log("new1: ", new1.toString());
        //console.log("new2: ", new2.toString());
        return [new1, new2];
    }
}

class Population{
    constructor(quantity, chromosomeSize){
        this.quantity = this.tuneQuantity(quantity);
        //console.log("this.quantity: ", this.quantity);
        this.chromosomes = [];
        for (var i = 0; i < this.quantity; i++){
            this.chromosomes.push(new Chromosome(chromosomeSize));
        }
        //console.log("this.chromosomes: ", this.chromosomes)
    }
    
    tuneQuantity(quantity) {
        if (quantity % 2 == 1) {
            return quantity + 1;
        }
        return quantity;
    }
    
    setScore(){
        for (var ch of this.chromosomes){
            ch.setScore();
        }
    }
    
    sortPopulation(){
        this.chromosomes.sort(comparator);
    }
    
    crossOver(){
        for (var i = 0; i < this.quantity / 2; i++){
            var n = 2 * i;
            var m = 2 * i + 1;
            //console.log("n value:", n, "m value:", m);
            var [new1, new2] = this.chromosomes[n].crossOver(this.chromosomes[m]);
            this.addChromosome(new1);
            this.addChromosome(new2);
            //console.log("new1: ", new1, "new2: ", new2);
        }
    }
    
    contains(newChromosome){
        for (var ch of this.chromosomes) {
            if (ch.toString().valueOf() == newChromosome.toString().valueOf()) {
                return true;
            }
        }
        return false;
    }
    
    addChromosome(newChromosome) {
        if (this.contains(newChromosome)) {
            this.chromosomes.push(new Chromosome());
        } else {
            this.chromosomes.push(newChromosome);
        }
    }
    
    selection(){
        this.chromosomes = this.chromosomes.slice(0, this.quantity);
    }
    
    toString(){
        var result = "";
        for (var ch of this.chromosomes){
            result += "\n" + ch.toString() + ", score: " + ch.score;
        }
        return result;
    }
}

function appendInDiv(divId, print) {
    var div = document.getElementById(divId);
    div.style.display = "block";
    div.innerText += print;
}


var population = new Population(100, 12);
population.setScore();
population.sortPopulation();

var generation = 0;
var maxGeneration = 10;
while (population.chromosomes[0].score != 0 && generation != maxGeneration){
    population.crossOver();
    population.setScore();
    population.sortPopulation();
    population.selection();
    console.log(generation, ": ", population.chromosomes[0].toString(), "; ", population.chromosomes[0].score);
    generation++;
}

//console.log("find it: ", population.chromosomes[0].toString());