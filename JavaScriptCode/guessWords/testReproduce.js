var chromosome1 = [2, 0, 3, 4, 3, 9, 8];
var chromosome2 = [7, 7, 5, 2, 1, 3, 9];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
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
    var slices = [0, getRandomInt(1, geneLength), getRandomInt(1, geneLength), geneLength];
    slices.sort();
    console.log("slices: ", slices);
    var genSegs1 = makeSegments(c1, slices);
    var genSegs2 = makeSegments(c2, slices);

    var c3 = genSegs1[0].concat(genSegs2[1], genSegs1[2]);
    var c4 = genSegs2[0].concat(genSegs1[1], genSegs2[2]);
    //console.log("c3: ", c3);
    //console.log("c4: ", c4);
    return [c3, c4];
}

var newGenes = reproduce(chromosome1, chromosome2);

console.log(newGenes);