var contestantsArray = [];


function Contestant(id, first, caliescore, jamesscore, javiscore, jessscore, vanessascore, active, weeksactive) {
    this.id = id;
    this.first = first;
    this.calie = caliescore;
    this.james = jamesscore;
    this.javi = javiscore;
    this.jess = jessscore;
    this.vanessa = vanessascore;
    this.active = active;
    this.weeksactive = weeksactive;
  }

var alexB = new Contestant(0, "Alex B", 30, 27, 0, 17, 0, true, 1
);
var caitlin = new Contestant(1, "Caitlin", 29, 29, 25, 14, 0, true, 2
);
var hannahB = new Contestant(2, "Hannah B", 28, 30, 26, 30, 30, true, 4
);
var cassie = new Contestant(3, "Cassie", 27, 24, 22, 24, 29, true, 4
);
var caelynn = new Contestant(4, "Caelynn", 26, 25, 28, 28, 28, true, 4
);
var demi = new Contestant(5, "Demi", 25, 21, 23, 20, 18, true, 4
);
var laura = new Contestant(6, "Laura", 24, 16, 29, 11, 27, false, 0
);
var hannahG = new Contestant(7, "Hannah G", 23, 18, 15, 27, 26, true, 4
);
var bri = new Contestant(8, "Bri", 22, 23, 27, 22, 12, true, 2
);
var adrianne = new Contestant(9, "Adrianne Jane", 21, 28, 0, 6, 23, false, 0
);
var alexd = new Contestant(10, "Alex D", 20, 20, 20, 16, 0, false, 0
);
var catherine = new Contestant(11, "Catherine", 19, 22, 30, 25, 24, true, 2
);
var erin = new Contestant(12, "Erin", 18, 13, 24, 18, 16, true, 0
);
var annie = new Contestant(13, "Annie", 17, 26, 0, 29, 0, true, 1
);
var nina = new Contestant(14, "Nina", 16, 7, 17, 21, 22, true, 2
);
var kirpa = new Contestant(15, "Kirpa", 15, 9, 18, 3, 11, true, 4
);
var tracy = new Contestant(16, "Tracy", 14, 2, 19, 7, 0, true, 3
);
var sydney = new Contestant(17, "Sydney", 13, 15, 9, 8, 25, true, 4
);
var nicole = new Contestant(18, "Nicole", 12, 10, 14, 9, 21, true, 4
);
var heather = new Contestant(19, "Heather", 11, 11, 0, 5, 8, true, 4
);
var erika = new Contestant(20, "Erika", 10, 17, 21, 15, 20, true, 1
);
var elyse = new Contestant(21, "Elyse", 9, 12, 13, 23, 19, true, 4
);
var tayshia = new Contestant(22, "Tayshia", 8, 4, 10, 26, 13,true, 4
);
var revian = new Contestant(23, "Revian", 7, 3, 16, 2, 15, false, 0
);
var angelique = new Contestant(24, "Angelique", 6, 1, 0, 1, 7, true,1 
);
var court = new Contestant(25, "Courtney", 5, 14, 11, 13, 7, false, 3
);
var devin = new Contestant(26, "Devin", 4, 19, 8, 12, 17, false, 0
);
var tahzjuan = new Contestant(27, "Tahjuan", 3, 5, 0, 4, 9, false, 0
);
var katie = new Contestant(28, "Katie", 2, 8, 0, 10, 10, true, 4
);
var onyeka = new Contestant(29, "Onyeka", 1, 6, 0, 19, 14, true, 4
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

    //console.log(contestantsArray[0]);

  //console.log(contestantsArray[1].calie);


  function calculateCalieScore(){
      var totalScore = 0;
      for(i=0; i < contestantsArray.length; i++){
        if(contestantsArray[i].active){
            totalScore = totalScore + ((contestantsArray[i].calie) * contestantsArray[i].weeksactive);
        }  
      }
      return totalScore;
  }

  //save the week's score

  function calculateJamesScore(){
    var totalScore = 0;
    for(i=0; i < contestantsArray.length; i++){
      if(contestantsArray[i].active){
          totalScore = totalScore + ((contestantsArray[i].james) * contestantsArray[i].weeksactive);
      }  
    }
    return totalScore;
}

function calculateJaviScore(){
    var totalScore = 0;
    for(i=0; i < contestantsArray.length; i++){
      if(contestantsArray[i].active){
          totalScore = totalScore + ((contestantsArray[i].javi) * contestantsArray[i].weeksactive);
      }  
    }
    return totalScore;
}
function calculateJessScore(){
    var totalScore = 0;
    for(i=0; i < contestantsArray.length; i++){
      if(contestantsArray[i].active){
          totalScore = totalScore + ((contestantsArray[i].jess) * contestantsArray[i].weeksactive);
      }  
    }
    return totalScore;
}
function calculateVanessaScore(){
    var totalScore = 0;
    for(i=0; i < contestantsArray.length; i++){
      if(contestantsArray[i].active){
          totalScore = totalScore + ((contestantsArray[i].vanessa) * contestantsArray[i].weeksactive);
      }  
    }
    return totalScore;
}

function createCalieList(){
    var html;
    for(i=29; i <= 29 && i >= 0; i--){
        function isI(arr) { 
            return arr.calie === i+1;
        }
        var list = contestantsArray.find(isI); 
        if(list.weeksactive < 3){
            html += '<tr style="color:red"><td>'+list.first + '</td><td>' + list.calie + '</td></tr>';
        }
        else{
            html += '<tr ><td>'+list.first + '</td><td>' + list.calie + '</td></tr>';
        }
        
    }
    document.getElementById('caliesDOMlist').innerHTML+= html;
}

function createVanessaList(){
    var html;
    for(i=29; i <= 29 && i >= 0; i--){
        function isI(arr) { 
            return arr.vanessa === i+1;
        }
        var list = contestantsArray.find(isI); 
        console.log(list);
        if(list.weeksactive < 3){
            html += '<tr style="color:red"><td>'+list.first + '</td><td>' + list.vanessa + '</td></tr>';
        }
        else{
            html += '<tr ><td>'+list.first + '</td><td>' + list.vanessa + '</td></tr>';
        }
    }
    document.getElementById('vanessaDOMlist').innerHTML+= html;
}

function createJamesList(){
    var html;
    for(i=29; i <= 29 && i >= 0; i--){
        function isI(arr) { 
            return arr.james === i+1;
        }
        var list = contestantsArray.find(isI); 
        console.log(list);
        if(list.weeksactive < 3){
            html += '<tr style="color:red"><td>'+list.first + '</td><td>' + list.james + '</td></tr>';
        }
        else{
            html += '<tr><td>'+list.first + '</td><td>' + list.james + '</td></tr>';
        }
    }
    document.getElementById('jamesDOMlist').innerHTML+= html;
}

function createJaviList(){
    var html;
    for(i=29; i <= 29 && i >= 0; i--){
        function isI(arr) { 
            return arr.javi === i+1;
        }
        var list = contestantsArray.find(isI); 
        console.log(list);
        if(list.weeksactive < 3){
            html += '<tr style="color:red"><td>'+list.first + '</td><td>' + list.james + '</td></tr>';
        }
        else{
            html += '<tr><td>'+list.first + '</td><td>' + list.javi + '</td></tr>';
        }
    }
    document.getElementById('javiDOMlist').innerHTML+= html;
}


//createCalieList();
//createVanessaList();
//createJamesList();
//createJaviList();

document.getElementById('caliescore').innerHTML = calculateCalieScore();
document.getElementById('jamesscore').innerHTML = calculateJamesScore();
document.getElementById('javiscore').innerHTML = calculateJaviScore();
document.getElementById('jessscore').innerHTML = calculateJessScore();
document.getElementById('vscore').innerHTML = calculateVanessaScore();

