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

		if(guesses<0)
			{
				losses=losses+1;
			}

		//Magic tricks to turn my hangman array into a string

		almost= space.toString();
		right= almost.replace(/,/g, '');

		if(guesses>=0 && right==word)
			{
				wins=wins+1;
			}

		document.getElementById("score").innerHTML = ["guesses:"+ guesses , "wins:"+ wins, "losses:"+ losses];
		

}



