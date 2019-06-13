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

var brian = new Contestant(0, "Brian", 28, 20, 29, 22, 0, true, 3
);
var cam = new Contestant(1, "Cam", 20, 11, 9, 26, 0, true, 2
);
var chasen = new Contestant(2, "Chasen", 21, 1, 18, 16, 0, false, 0
);
var connorj = new Contestant(3, "Connor J", 8, 6, 6, 14, 0, false, 1
);
var connors = new Contestant(4, "Connor S", 23, 26, 13, 27, 0, true, 3
);
var daron = new Contestant(5, "Daron", 3, 12, 2, 5, 0, false, 1
);
var devon = new Contestant(6, "Devon", 9, 8, 25, 8, 0, true, 3
);
var dustin = new Contestant(7, "Destin", 1, 7, 7, 25, 0, true, 3
);
var dylan = new Contestant(8, "Dylan", 14, 27, 20, 13, 0, true, 3
);
var garrett = new Contestant(9, "Garrett", 25, 22, 30, 24, 0, true, 3
);
var grant = new Contestant(10, "Grant", 4, 18, 23, 2, 0, true, 3
);
var hunter = new Contestant(11, "Hunter", 10, 14, 14, 4, 0, false, 0
);
var jed = new Contestant(12, "Jed", 11, 16, 22, 30, 0, true, 3
);
var joe = new Contestant(13, "Joe", 12, 19, 17, 6, 0, false, 0
);
var joey = new Contestant(14, "Joey", 27, 28, 16, 9, 0, true, 2
);
var johnpauljones = new Contestant(15, "John Paul Jones", 13, 2, 15, 17, 0, true, 3
);
var jonathan = new Contestant(16, "Jonathan", 5, 9, 3, 18, 0, true, 2
);
var kevin = new Contestant(17, "Kevin", 24, 13, 21, 7, 0, true, 3
);
var lukep = new Contestant(18, "Luke P", 30, 29, 27, 29, 0, true, 3
);
var lukes = new Contestant(19, "Luke S", 19, 21, 8, 23, 0, true, 3
);
var mattd = new Contestant(20, "Matt D", 26, 23, 11, 10, 0, false, 0
);
var matteo = new Contestant(21, "Matteo", 18, 15, 12, 21, 0, true, 3
);
var matthew = new Contestant(22, "Matthew", 29, 25, 5, 19, 0,false, 1
);
var mike = new Contestant(23, "Mike", 2, 10, 24, 20, 0, true, 3
);
var peter = new Contestant(24, "Peter", 16, 24, 10, 28, 0, true, 3
);
var ryan = new Contestant(25, "Ryan", 15, 3, 4, 15, 0, false, 0
);
var scott = new Contestant(26, "Scott", 6, 5, 1, 1, 0, false, 0
);
var thomas = new Contestant(27, "Thomas", 7, 4, 26, 11, 0, false, 0
);
var tylerc = new Contestant(28, "Tyler C", 22, 30, 28, 12, 0, true, 3
);
var tylerg = new Contestant(29, "Tyler G", 17, 17, 19, 3, 0, true, 2
);

var contestantsArray = [brian,
    cam,
    chasen,
    connorj,
    connors,
    daron,
    devon,
    dustin,
    dylan,
    garrett,
    grant,
    hunter,
    jed,
    joe,
    joey,
    johnpauljones,
    jonathan,
    kevin,
    lukep,
    lukes,
    mattd,
    matteo,
    matthew,
    mike,
    peter,
    ryan,
    scott,
    thomas,
    tylerc,
    tylerg];

    //console.log(contestantsArray[0]);

  //console.log(contestantsArray[1].calie);

  /*
  const calculateScore = (player) => {
    console.log(contestantsArray[3].player);
    var totalScore = 0;
    for(i=0; i < contestantsArray.length; i++){
      if(contestantsArray[i].active){
          totalScore = totalScore + ((parseInt(contestantsArray[i].player)) * contestantsArray[i].weeksactive);
      }  
    }
    return totalScore;
}

console.log(calculateScore(calie));
*/

  function calculateScore(name){
      var totalScore = 0;
      for(i=0; i < contestantsArray.length; i++){
       
            totalScore = totalScore + ((contestantsArray[i][name]) * contestantsArray[i].weeksactive);
    
      }
      return totalScore;
  }

console.log(calculateScore('calie'));

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

const currentWeek = 3;

function createCalieList(){
    var html = '';
    for(i=29; i <= 29 && i >= 0; i--){
        function isI(arr) { 
            return arr.calie === i+1;
        }
        var list = contestantsArray.find(isI); 
      
        if(list.weeksactive < currentWeek){
            html += '<tr style="color:red"><td>'+list.first + '</td><td>' + list.calie + '</td></tr>';
        }
        else{
            html += '<tr ><td>'+list.first + '</td><td>' + list.calie + '</td></tr>';
        }
        
    }
    document.getElementById('caliesDOMlist').innerHTML+= html;
    
}

function createJamesList(){
    var html = '';
    for(i=29; i <= 29 && i >= 0; i--){
        function isI(arr) { 
            return arr.james === i+1;            
        }
    
        var list = contestantsArray.find(isI); 

        if(list.weeksactive < currentWeek){
            html += '<tr style="color:red"><td>'+list.first + '</td><td>' + list.james + '</td></tr>';
        }
        else{
            html += '<tr><td>'+list.first + '</td><td>' + list.james + '</td></tr>';
        }
    }
    document.getElementById('jamesDOMlist').innerHTML+= html;
}

function createJessList(){
    var html = '';
    for(i=29; i <= 29 && i >= 0; i--){
        function isI(arr) { 
            return arr.jess === i+1;
        }
        var list = contestantsArray.find(isI); 
        if(list.weeksactive < currentWeek){
            html += '<tr style="color:red"><td>'+list.first + '</td><td>' + list.jess + '</td></tr>';
        }
        else{
            html += '<tr><td>'+list.first + '</td><td>' + list.jess + '</td></tr>';
        }
    }
    document.getElementById('jessDOMlist').innerHTML+= html;
}

function createJaviList(){
    var html = '';
    for(i=29; i <= 29 && i >= 0; i--){
        function isI(arr) { 
            return arr.javi === i+1;
        }
        var list = contestantsArray.find(isI); 
        if(list.weeksactive < currentWeek){
            html += '<tr style="color:red"><td>'+list.first + '</td><td>' + list.javi + '</td></tr>';
        }
        else{
            html += '<tr><td>'+list.first + '</td><td>' + list.javi + '</td></tr>';
        }
    }
    document.getElementById('javiDOMlist').innerHTML+= html;
}


createCalieList();
createJamesList();
createJessList();
createJaviList();

//document.getElementById('caliescore').innerHTML = calculateCalieScore();
document.getElementById('jamesscore').innerHTML = calculateJamesScore();
document.getElementById('javiscore').innerHTML = calculateJaviScore();
document.getElementById('jessscore').innerHTML = calculateJessScore();
document.getElementById('vscore').innerHTML = calculateVanessaScore();

