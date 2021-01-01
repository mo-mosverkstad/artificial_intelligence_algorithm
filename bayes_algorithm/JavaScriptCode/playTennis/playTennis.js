function countInColumn(data, colomnNumber, reqText){
    //console.log("localrequierment1", localReq);
    var count = 0;
    for (var i of data){
        if (i.a[colomnNumber] == reqText){
            count ++;
        }
    }
    return count;
}

function countInB(data, reqText){
    //console.log("localrequierment1", localReq);
    var count = 0;
    for (var i of data){
        if (i.b == reqText){
            count ++;
        }
    }
    return count;
}

function countInColumnForB(data, reqText){
    //console.log("localrequierment1", localReq);
    var count = 0;
    for (var i of data){
        if (i.b == reqText){
            count ++;
        }
    }
    return count;
}

function countInColumnLocal(data, colomnNumber, reqText, localReq){
    //console.log("localrequierment1", localReq);
    var count = 0;
    for (var i of data){
        if (i.a[colomnNumber] == reqText && i.b == localReq){
            count ++;
        }
    }
    return count;
}

function Propability(data, variable, position, aConditions, bConditions = null){
    if (bConditions == null && variable == "a"){
        return countInColumn(data, position, aConditions)/ data.length;
    }
    else if (bConditions != null && variable == "a"){
        var amounts = countInB(data, bConditions);
        var selectives = countInColumnLocal(data, position, aConditions, bConditions);
        return selectives/amounts;
    }
    else{
        return countInColumnForB(data, aConditions)/data.length;
    }
}

function playTennis(data, weather, temperature, humidity, wind){
    var playingTennis = (Propability(data, "b", 0, "yes") 
    * Propability(data, "a", 0, weather, "yes") 
    * Propability(data, "a", 1, temperature, "yes")
    * Propability(data, "a", 2, humidity, "yes") 
    * Propability(data, "a", 3, wind, "yes"))
    /(Propability(data, "a", 0, weather)
    * Propability(data, "a", 1, temperature)
    * Propability(data, "a", 2, humidity)
    * Propability(data, "a", 3, wind));
    var notPlayingTennis = (Propability(data, "b", 0, "no") 
    * Propability(data, "a", 0, weather, "no") 
    * Propability(data, "a", 1, temperature, "no")
    * Propability(data, "a", 2, humidity, "no") 
    * Propability(data, "a", 3, wind, "no"))
    /(Propability(data, "a", 0, weather)
    * Propability(data, "a", 1, temperature)
    * Propability(data, "a", 2, humidity)
    * Propability(data, "a", 3, wind));
    console.log("probability of playingTennis : " , playingTennis);
    console.log("probability of notPlayingTennis : ", notPlayingTennis);
    if (playingTennis > notPlayingTennis){
        return "yes";
    }
    else{
        return "no";
    }   
}


//console.log(Propability(dataPlayTennis, "a", 1, "hot"));
//console.log(Propability(dataPlayTennis, "a", 0, "rainy", "no"));
//console.log(Propability(dataPlayTennis, "b", 0, "yes"));
console.log(playTennis(dataPlayTennis, "sunny", "cool", "high", "True"));