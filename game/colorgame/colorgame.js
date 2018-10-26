numSquares=6;
var colors =[];
var chooseColor;
var h1 = document.querySelector('h1');
var squares = document.querySelectorAll('.square');
var messageDisplay=document.querySelector('.messageDisplay');
var colorShown =document.querySelector('.colorshown');
var modeButtons = document.querySelectorAll('.mode');
var resetButton = document.querySelector('#reset');


init();
function init(){
           modeChoose();
           setUp();
           reset();
}


function modeChoose(){
	for(var i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
	  this.classList.add("selected");
	  if(this.textContent =="Easy"){
	  	numSquares=3;
	  }else{
	  	numSquares=6;
	  }
	  reset();
	});
}
}


function setUp(){
	for (var i = 0; i <squares.length ; i++) {

 	   squares[i].addEventListener("click",function(){

 	   	 var clickedColor = this.style.backgroundColor;
 	   	 
 		   if(clickedColor === chooseColor){
              messageDisplay.textContent = "Correct!!";
 		   	 changeColors(clickedColor);
 		   	 reset.textContent="PlayAgain?";
 	   		}else{
 	   			messageDisplay.textContent = "TryAgain";
 	   			this.style.backgroundColor = "rgb(0, 0, 0)";
 	   		}
 	   	}); 	
  }
}


function reset(){

	 colors=generateRandomColor(numSquares);
     chooseColor=pickColor();
     colorShown.textContent=chooseColor;
     messageDisplay.textContent="";
     resetButton.textContent="New Colors";
        for (var i = 0; i <squares.length ; i++) {
 		   if(colors[i]){
 	             squares[i].style.display="block"
 	             squares[i].style.backgroundColor = colors[i];
 	  }else{
 	  	squares[i].style.display="none";
 	  }
    }
 	h1.style.backgroundColor ="steelblue" ;
}

resetButton.addEventListener("click",function(){ reset();});

    

 	

 
 function changeColors(color){
 		for (var i = 0; i <colors.length ; i++){
 		   	   squares[i].style.backgroundColor=color;
 		   	}
 		   	h1.style.backgroundColor=color;
 	}

 	function pickColor(){
 		var random = Math.floor(Math.random()*colors.length);
        return colors[random];
 	}
 	function generateRandomColor(num){ 
 		var arr = [];
 		for(var i=0;i<num;i++){
 			arr[i]=randomColors();	
 	  }
 	  return arr;
   }
  
  function randomColors(){
  	      var r = Math.floor(Math.random()*256);
 		 var g = Math.floor(Math.random()*256);
 		 var b = Math.floor(Math.random()*256);

 		 return "rgb("+r+", "+g+", "+b+")";
  }
