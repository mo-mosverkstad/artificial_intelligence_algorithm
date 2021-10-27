var canvas = document.getElementById("imageProcessCanvas");
var ctx = canvas.getContext("2d");
var hiddenCanvas = document.getElementById('outputCanvas');
var hiddenCtx = hiddenCanvas.getContext('2d');
hiddenCanvas.style.display = 'none';

var fileUpload = document.getElementById('fileUpload');
var fileUploadRight = document.getElementById('fileUploadRight');

var imageOrigData = null;
var imageProcData = null;

var canvasPosition = new CanvasPosition(ctx);
var imgOrignal = new Image();

function readImage() {
    if ( this.files && this.files[0] ) {
        var fr= new FileReader();
        fr.onload = function(e) {
            imgOrignal.src = e.target.result;
            imgOrignal.onload = function() {
                canvasPosition.setImageSize(imgOrignal.naturalWidth, imgOrignal.naturalHeight);
                ctx.drawImage(imgOrignal, 0, 0, imgOrignal.naturalWidth, imgOrignal.naturalHeight);
                imageOrigData  = loadData(0, 0, imgOrignal.naturalWidth, imgOrignal.naturalHeight);
           };
        };       
        fr.readAsDataURL( this.files[0] );
    }
}
fileUpload.onchange = readImage;


function imageProcessGeneralFunction(ipFunc, func) {
    if (imageOrigData == null) return;
    pos = canvasPosition.getImagePosition(1, 0);
    ipFunc(func, imageOrigData, pos);
    imageProcData = loadData(pos.x, pos.y, imgOrignal.naturalWidth, imgOrignal.naturalHeight);
}

function makeSqrt() {
    imageProcessGeneralFunction(imageProcess, imageSqrt);
}

function grayScale() {
    imageProcessGeneralFunction(imageProcess, imageGray);
}

function invertedColor() {
    imageProcessGeneralFunction(imageProcess, imageInverted);
}

function compress() {
    imageProcessGeneralFunction(imageProcess, imageCompress);
}

function soften() {
    imageProcessGeneralFunction(imageProcess2, imageSoften);
}

function sharpen() {
    imageProcessGeneralFunction(imageProcess2, imageSharpen);
}

function edge() {
    imageProcessGeneralFunction(imageProcess2, imageEdge);
}

function edgeBnW() {
    imageProcessGeneralFunction(imageProcess2, imageEdgeBnW);
}


function medianFilter() {
    imageProcessGeneralFunction(imageProcessArray, imageMedianFilter);
}

function valueFilter() {
    imageProcessGeneralFunction(imageProcess, imageValueFilter);
}




function colorOrigScatter() {
    if (imageOrigData == null) return;
    colorScatter(imageOrigData, 0);
}

function colorProcScatter() {
    if (imageProcData != null)
        colorScatter(imageProcData, 1);
}

function colorScatter(data, x) {
    imageProcess(imageRed,   data, canvasPosition.getImagePosition(x, 1));
    imageProcess(imageGreen, data, canvasPosition.getImagePosition(x, 2));
    imageProcess(imageBlue,  data, canvasPosition.getImagePosition(x, 3));
}





function colorOrigAnalysis() {
    if (imageOrigData == null) return;
    var histogramArray = statisData(imageOrigData);
    showHistogram(0, histogramArray);
}

function colorProcAnalysis() {
    if (imageProcData != null) {
        var histogramArray = statisData(imageProcData);
        showHistogram(1, histogramArray);
    }
}



function generateOutputImg() {
    if (imageOrigData == null || imageProcData == null) return;
    
    var pos = canvasPosition.getImagePosition(1, 0);
    var x = pos.x;
    var y = pos.y;
    var w = imageOrigData.width;
    var h = imageOrigData.height;
    
    hiddenCtx.clearRect(0, 0, hiddenCanvas.width, hiddenCanvas.height);
    hiddenCanvas.width = w;
    hiddenCanvas.height = h;
    
    //Draw the data you want to download to the hidden canvas
    hiddenCtx.drawImage(canvas, x, y, w, h, 0, 0, w, h);
    
    //Create a download URL for the data
    var hiddenData = hiddenCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    var dataURL = hiddenCanvas.toDataURL();
    document.getElementById('outputImg').src = dataURL;
}


function setBestChromosome(bestChromosome, chromosome) {
    bestChromosome.chromosome = chromosome;
    bestChromosome.met = 1;
}

function increaseBestChromosome(bestChromosome) {
    bestChromosome.met += 1;
}

function generateBestOnGA(targtC) {
    var populationQuantity = 500;
    var chromosomeSize = 8;
    var bestChromosome = {chromosome: {genes: [], score: 0}, met: 0};
    
    population = generatePopulation(populationQuantity, chromosomeSize);
    setScore(population, targtC);
    population = sortPopulation(population);
    setBestChromosome(bestChromosome, population[0]);

    //console.log(bestChromosome);
    
    var generationNumber = 0;
    var generationMax = 50;
    var metMax = 3;
    
    while (bestChromosome.met <= metMax && generationNumber < generationMax){
        var newGeneration = crossOver(population);
        setScore(newGeneration, targtC);
        population = population.concat(newGeneration);
        population = sortPopulation(population);
        population = population.slice(0, populationQuantity);
        
        if (population[0].score < bestChromosome.chromosome.score) {
            setBestChromosome(bestChromosome, population[0]);
        } else {
            increaseBestChromosome(bestChromosome);
        }
        appendInDiv("outputGA", "Generation: " + generationNumber + "; result: " + convertToAscii(population[0].genes) + "; score: " + population[0].score);

        //console.log(bestChromosome);
        generationNumber++;
    }
    return bestChromosome;
}

function compressGA() {
    if (imageOrigData == null) return;
    var histogramArray = statisData(imageOrigData);
    //document.getElementById('outputGA').innerHTML = histogramArray;
    cleanDiv("outputGA");
    appendInDiv("outputGA", "To generate RED using GA:");
    bestChromosomeR = generateBestOnGA(histogramArray.r);
    appendInDiv("outputGA", "To generate GREEN using GA:");
    bestChromosomeG = generateBestOnGA(histogramArray.g);
    appendInDiv("outputGA", "To generate BLUE using GA:");
    bestChromosomeB = generateBestOnGA(histogramArray.b);
    
    pos = canvasPosition.getImagePosition(1, 0);
    imageProcess3(compressOnReferData, imageOrigData, pos, {r:bestChromosomeR.chromosome.genes, g:bestChromosomeG.chromosome.genes, b:bestChromosomeB.chromosome.genes});
    imageProcData = loadData(pos.x, pos.y, imgOrignal.naturalWidth, imgOrignal.naturalHeight);
    
}