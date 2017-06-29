//Defined my variables if the they won or lost

var wins= 0;
var losses= 0; 
var tries= [];
var count= 0;

//Defined my arrays when player plays the game
var bands= ["madonna", "kiss","foreigner", "zeppelin", "beatles"];

//Flexible array whenever the word is randomly generated
var space= [];

//Creating the flexible array
var randIndex=Math.floor(Math.random()*bands.length);
var word= bands[randIndex];
var guesses= word.length+1;

function showhide() {
    var img = document.getElementById('beatles');
    var img2= document.getElementById('zeppelin');
    var img3= document.getElementById('kiss');
    var img4= document.getElementById('foreigner');
    var img5= document.getElementById('madonna');
    
        img.style.display= "block";
        img2.style.display= "none";
        img3.style.display= "none";
        img4.style.display= "none";
        img5.style.display= "none";
        
        
}

function showhide2() {
    var img = document.getElementById('zeppelin');
    var img2= document.getElementById('beatles');
    var img3= document.getElementById('kiss');
    var img4= document.getElementById('foreigner');
    var img5= document.getElementById('madonna');
    
        img.style.display = "block";
        img2.style.display= "none";
        img3.style.display= "none";
        img4.style.display= "none";
        img5.style.display= "none";
     
}

function showhide3() {
    var img = document.getElementById('kiss');
    var img2= document.getElementById('beatles');
    var img3= document.getElementById('zeppelin');
    var img4= document.getElementById('foreigner');
    var img5= document.getElementById('madonna');
    
        img.style.display = "block";
        img2.style.display= "none";
        img3.style.display= "none";
        img4.style.display= "none";
        img5.style.display= "none";
         
}

function showhide4() {
    var img = document.getElementById('foreigner');
    var img2= document.getElementById('beatles');
    var img3= document.getElementById('zeppelin');
    var img4= document.getElementById('kiss');
    var img5= document.getElementById('madonna');
    
        img.style.display = "block";
        img2.style.display= "none";
        img3.style.display= "none";
        img4.style.display= "none";
        img5.style.display= "none";
         
}

function showhide5() {
    var img = document.getElementById('madonna');
    var img2= document.getElementById('beatles');
    var img3= document.getElementById('zeppelin');
    var img4= document.getElementById('kiss');
    var img5= document.getElementById('foreigner');
    
        img.style.display = "block";
        img2.style.display= "none";
        img3.style.display= "none";
        img4.style.display= "none";
        img5.style.display= "none";
        
}

function reset() 

{

		space=[];
		randIndex=Math.floor(Math.random()*bands.length);
		word= bands[randIndex];
		guesses= word.length+1;
		tries= [];
		count= 0;

		for(i=0; i<word.length; i++)
		{
			space.push("_ ");
			document.getElementById("h"). innerHTML = space.join(" ");
			//console.log(space);

		}




}


//Undergoing the word length to pop out the underscores so the player is totally confused what word he or she has to guess
for(i=0; i<word.length; i++)
{
	space.push("_ ");
	document.getElementById("h"). innerHTML = space.join(" ");
	//console.log(space);

}

document.getElementById("score").innerHTML = ["guesses:"+ guesses , "wins:"+ wins, "losses:"+ losses];

//document.getElementById("h").innerHTML = "hello world";

//User guess key strokes
document.onkeyup=function(event)
{
	var userguess= event.key;


//Undergoing each letter of the array to see if the player guess the letter correctly
	for(j=0; j<word.length; j++) 
	{
		if(userguess === word.charAt(j))
		{
			space[j]=userguess;
			document.getElementById("h"). innerHTML = space.join(" ");
			
		}
		
	}
		guesses=guesses-1;
		
		//Making the array to show the letters that will pop up when guessing

		document.getElementById("dashboard").innerHTML = userguess

		tries[count]=userguess;

		document.getElementById("dashboard").innerHTML = tries.join(" ");
		
		count= count+1;

		//Conditional statements that determine the player's fate

		

		if(guesses<=0&& right!==word)
			{
				losses=losses+1;
				if(losses===8)
				{
					document.getElementById("picture").innerHTML = "<h3>YOU JUST LOST THE GAME!</h3>"
				}
				reset();
			}

		//Magic tricks to turn my hangman array into a string

		almost= space.toString();
		right= almost.replace(/,/g, '');

		if(guesses>=0 && right==word)
			{
				wins=wins+1;
				reset();
				
			}

		


		document.getElementById("score").innerHTML = ["guesses:"+ guesses , "wins:"+ wins, "losses:"+ losses];
		
		if(right==="zeppelin")
		{
			showhide2();

		}

		if(right==="beatles")
		{
			showhide();
		}

		if(right==="kiss")
		{
			 showhide3();
		}

		if(right==="foreigner")
		{
			showhide4();
		}

		if(right==="madonna")
		{
			showhide5();
		}
}



