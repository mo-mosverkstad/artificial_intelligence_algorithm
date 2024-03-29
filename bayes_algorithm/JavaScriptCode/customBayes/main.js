console.log("The code has started!");
document.getElementById("result").innerHTML = "AAA";
/*
Notations:
sunny  : 0
cloudy : 1
rainy  : 2
snowy  : 3
stormy : 4
windy  : 5
cold   : 6
warm   : 7
*/
var data = [0, 0, 2, 1, 0, 1, 1, 0];
var BayesNET = function(data, divide){
  var elementQuantity = 0;
  for (var i = 0; i < data.length; i++){
    if (data[i] > elementQuantity){
      elementQuantity = data[i];
    }
  }
  elementQuantity = elementQuantity + 1;
  
  var formatData = [];
  for (var i = 0; i < divide-1; i++){
    formatData.push([]);
    for (var j = 0; j < elementQuantity; j++){
      formatData[i].push([]);
      for (var k = 0; k < elementQuantity; k++){
        formatData[i][j].push(0);
      }
    }
  }
  
  for (var i = 0; i < data.length-1; i++){
    var jMin = 0;
    var jMax = divide-1;
    if (i < divide-2){
      jMax = i + 1;
    }
    else if (i > data.length-divide){
      jMin = divide - (data.length - i);
    }
    //console.log(jMax);
    for (var j = jMin; j < jMax; j++){
      formatData[j][data[i]][data[i+divide-1-j]]++;
      //console.log(data[i+divide-1-j]);
    }
  }
  
  var bayesClass = [];
  for (var i = 0; i < elementQuantity; i++){
    bayesClass.push(0);
  }
  for (var i = divide-1; i < data.length; i++){
    bayesClass[data[i]] ++;
  }
  //console.log(bayesClass);
  
  var predictSEQ = data.slice(-divide+1);
  var probability = [];
  for (var i = 0; i < elementQuantity; i++){
    var product = 1;
    for (var j = 0; j < divide-1; j++){
      //console.log(i, j, predictSEQ[j], formatData[j][predictSEQ[j]][i]);
      product = product * formatData[j][predictSEQ[j]][i];
    }
    product = product * bayesClass[i];
    probability.push(product);
  }
  console.log(probability);
  
  var largestIndex = 0;
  for (var i = 0; i < probability.length; i++){
    if (probability[i] > probability[largestIndex]){
      largestIndex = i;
    }
  }
  return largestIndex;
}
document.getElementById("result").innerHTML = BayesNET(data, 4);