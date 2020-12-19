var targetText = "house2";

function generateTarget(txt){
    var result = [];
    for (i = 0; i < txt.length; i++){
        result.push(txt.charCodeAt(i));
    }
    return result;
}

function generatePopulation(quantity){
    var p = [];
    for (i = 0; i < quantity; i++){
        var chromosome = [];
        for (j = 0; j < 6; j++){
            chromosome.push(Math.floor(Math.random() * 256));
        }
        p.push(chromosome);
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

function calculateDifference(chromosome, targetC){
    //console.log(targetC);
    var difference = [];
    for (var i = 0; i < chromosome.length; i++){
        difference.push(Math.abs(chromosome[i] - targetC[i]));
        //console.log(chromosome[i].toString() + " - " + targetC[i].toString() + " = " + (chromosome[i] - targetC[i]).toString());
    }
    //console.log("inside: ", chromosome);
    return difference;
}



function setScore(p, t){
    for (var i = 0; i < p.length; i++){
        //console.log("old: ", p[i]);
        var difference = calculateDifference(p[i], t);
        //console.log("new: ", p[i]);
        //console.log(t);
        //console.log("i:" + i.toString() + " - Chromosome: " + p[i].toString() + " - target: " + t.toString() + " - difference: " + difference);
        //console.log("difference: " + difference.toString());
        var score = sigma(difference);
        //console.log("score: " + score.toString());
        p[i].push(score);
    }
}


// processing area
var target = generateTarget(targetText);
var population = generatePopulation(5);
setScore(population, target);

// test area

console.log(population);
//console.log(calculateDifference([15, 25, 58], [25, 2, 11]));
//console.log(sigma([2, 5, 8, 29, 12]));