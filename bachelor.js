var contestantsArray = [];

var calie;

function Contestant(id, first, caliescore, jamesscore, javiscore, jessscore, vanessascore, active, weekinactive) {
    this.id = id;
    this.first = first;
    this.calie = caliescore;
    this.james = jamesscore;
    this.javi = javiscore;
    this.jess = jessscore;
    this.vanessa = vanessascore;
    this.active = active;
    this.weekinactive = weekinactive;
  }

var alexB = new Contestant(0, "Alex B", 30, 27, 0, 17, 0, true
);

var caitlin = new Contestant(1, "Caitlin", 29, 29, 25, 14, 0, true
);
var hannahB = new Contestant(2, "Hannah B", 28, 30, 26, 30, 30, true
);
var cassie = new Contestant(3, "Cassie", 27, 24, 22, 24, 29, true
);
var caelynn = new Contestant(4, "Caelynn", 26, 25, 28, 28, 28, true
);
var demi = new Contestant(5, "Demi", 25, 21, 23, 20, 18, true
);
var laura = new Contestant(6, "Laura", 24, 16, 29, 11, 27, false
);
var hannahG = new Contestant(6, "Hannah G", 23, 18, 15, 27, 26, true
);
var bri = new Contestant(6, "Bri", 22, 23, 27, 22, 12, true
);
var adrianne = new Contestant(6, "Adrianne Jane", 21, 28, 0, 6, 23, false
);
var alexd = new Contestant(6, "Adrianne Jane", 20, 20, 20, 16, 0, false
);
var catherine = new Contestant(6, "Adrianne Jane", 19, 22, 30, 25, 24, true
);
var erin = new Contestant(6, "Erin", 18, 13, 24, 18, 16, true
);
var annie = new Contestant(6, "Erin", 17, 26, 0, 29, 0, true
);
var nina = new Contestant(6, "Erin", 16, 7, 17, 21, 22, true
);
var kirpa = new Contestant(6, "Erin", 15, 9, 18, 3, 11, true
);
var tracy = new Contestant(6, "Erin", 14, 2, 19, 7, 0, true
);
var sydney = new Contestant(6, "Erin", 13, 15, 9, 8, 25, true
);
var nicole = new Contestant(6, "Erin", 12, 10, 14, 9, 21, true
);
var heather = new Contestant(6, "Erin", 11, 11, 0, 5, 8, true
);
var erika = new Contestant(6, "Erin", 10, 17, 21, 15, 20, true
);
var elyse = new Contestant(6, "Erin", 9, 12, 13, 23, 19, true
);
var tayshia = new Contestant(6, "Erin", 8, 4, 10, 26, 13,true
);
var revian = new Contestant(6, "Erin", 7, 3, 16, 2, 15, false
);
var angelique = new Contestant(6, "Erin", 6, 1, 0, 1, 7, true
);
var court = new Contestant(6, "Erin", 5, 14, 11, 13, 7, false
);
var devin = new Contestant(6, "Erin", 4, 19, 8, 12, 17, false
);
var tahzjuan = new Contestant(6, "Erin", 3, 5, 0, 4, 9, false
);
var katie = new Contestant(6, "Erin", 2, 8, 0, 10, 10, true
);
var onyeka = new Contestant(6, "Erin", 1, 6, 0, 19, 14, true
);


  contestantsArray.push(
    alexB,
    alexd,
    angelique,
    annie,
    bri,
    caelynn,
    caitlin,
    cassie,
    catherine,
    court,
    demi,
    devin,
    elyse,
    erika,
    erin,
    hannahB,
    hannahG,
    heather,
    adrianne,
    katie,
    kirpa,
    laura,
    nicole,
    onyeka,
    nina,
    revian,
    sydney,
    tahzjuan,
    tayshia,
    tracy);

    console.log(contestantsArray);

  //console.log(contestantsArray[1].calie);


  function calculateCalieScore(){
      var totalScore = 0;
      for(i=0; i < contestantsArray.length; i++){
        if(contestantsArray[i].active){
            totalScore = totalScore + contestantsArray[i].calie;
        }  
      }
      return totalScore;
  }

  //save the week's score

  function calculateJamesScore(){
    var totalScore = 0;
    for(i=0; i < contestantsArray.length; i++){
      if(contestantsArray[i].active){
          totalScore = totalScore + contestantsArray[i].james;
      }  
    }
    return totalScore;
}

function calculateJaviScore(){
    var totalScore = 0;
    for(i=0; i < contestantsArray.length; i++){
      if(contestantsArray[i].active){
          totalScore = totalScore + contestantsArray[i].javi;
      }  
    }
    return totalScore;
}
function calculateJessScore(){
    var totalScore = 0;
    for(i=0; i < contestantsArray.length; i++){
      if(contestantsArray[i].active){
          totalScore = totalScore + contestantsArray[i].jess;
      }  
    }
    return totalScore;
}
function calculateVanessaScore(){
    var totalScore = 0;
    for(i=0; i < contestantsArray.length; i++){
      if(contestantsArray[i].active){
          totalScore = totalScore + contestantsArray[i].vanessa;
      }  
    }
    return totalScore;
}


document.getElementById('caliescore').innerHTML = calculateCalieScore();
document.getElementById('jamesscore').innerHTML = calculateJamesScore();
document.getElementById('javiscore').innerHTML = calculateJaviScore();
document.getElementById('jessscore').innerHTML = calculateJessScore();
document.getElementById('vscore').innerHTML = calculateVanessaScore();

