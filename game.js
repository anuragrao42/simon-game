var gamePattern  = [];
var userPattern = [];
var Colors = ["red", "blue", "green","yellow"];
var start  = false;
var level  = 0;

$(document).keydown(function(){
  if(!start){
    $("#level-title").text("Level "+level);
    nextSequence();
    start = true;

  }
});
$(".btn").click(function(){

  var btnId = $(this).attr("id");
  userPattern.push(btnId);
  addFlash(btnId);
  buttonSound(btnId);
  // console.log(userPattern);
  checkSolution(userPattern.length - 1);




});


//-------------------
function nextSequence(){
  level++;
  $(".score").text("Your Score: "+((level*10)-10));
  userPattern = [];
  $("#level-title").text("Level "+level);

  var randm = Math.floor(Math.random() * 4);
  var gameRandColor = Colors[randm];
  gamePattern.push(gameRandColor);
  $("#"+gameRandColor).fadeIn(100).fadeOut(100).fadeIn(100);
  buttonSound(gameRandColor);


}

function buttonSound(color){
  var audio = new Audio("sounds/"+color+".mp3");
  audio.play()
}

function addFlash(btnId){
  $("#"+btnId).addClass("pressed");
  setTimeout(function(){
    $("#"+btnId).removeClass("pressed");
  }, 200);
}

function checkSolution (level){
  if (userPattern[level] === gamePattern[level]){
    if (userPattern.length === gamePattern.length){
      setTimeout(function(){
        nextSequence();

      }, 1000);



    }
  }
  else{

    buttonSound("wrong");
    $("#wrong").addClass("game-over");
    setTimeout(function(){
      $("#wrong").removeClass("game-over");
    }, 300);
    $("#level-title").text("Press Any key to Restart! Best of Luck!!");
    starting();
  }

}
function starting(){
  start  = false;
   level  = 0;
  gamePattern  = [];


}
