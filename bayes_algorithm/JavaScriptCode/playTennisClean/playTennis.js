function playTennis(data, weather, temperature, humidity, wind){
    var positiveFavarable = favarablePropability(data, "yes", weather, temperature, humidity, wind);
    var negativeFavarable = favarablePropability(data, "no", weather, temperature, humidity, wind);
    var total = totalPropability(dataPlayTennis, weather, temperature, humidity, wind);
    
    var playingTennis = positiveFavarable / total;
    var notPlayingTennis = negativeFavarable / total;
    //console.log("play tennis:", playingTennis);
    //console.log("not playing tennis:", notPlayingTennis);
    if (playingTennis > notPlayingTennis){
        return "yes";
    }
    else{
        return "no";
    }
}

function favarablePropability(data, state, weather, temperature, humidity, wind){
    var total = data.bc[state];
    var bctotal = data.bc.yes + data.bc.no;
    
    var head = total / bctotal;
    
    var weatherPropability = data[weather][state] / total;
    var temperaturePropability = data[temperature][state] / total;
    var humidityPropability = data[humidity][state] / total;
    var windPropability = data[wind][state] / total;
    
    //console.log(weatherPropability * temperaturePropability * humidityPropability * windPropability);
    return head * weatherPropability * temperaturePropability * humidityPropability * windPropability;
}

function totalPropability(data, weather, temperature, humidity, wind){
    var total = data.bc.yes + data.bc.no;
    
    var weatherPropability = (data[weather].yes + data[weather].no) / total;
    var temperaturePropability = (data[temperature].yes + data[temperature].no) / total;
    var humidityPropability = (data[humidity].yes + data[humidity].no) / total;
    var windPropability = (data[wind].yes + data[wind].no) / total;
    
    return weatherPropability * temperaturePropability * humidityPropability * windPropability;
}

console.log(playTennis(dataPlayTennis, "sunny", "hot", "normal", "True"));