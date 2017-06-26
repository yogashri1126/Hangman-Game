var wins= 0;
var losses= 0;


var bands= ["madonna", "kiss","foreigner", "zeppelin", "beatles"];
var space= [];

var randIndex=Math.floor(Math.random()*bands.length);
var word= bands[randIndex];
var guesses= randIndex+1;

for(i=0; i<word.length; i++)
{
	document.write(space[i]="_  ");
}

document.onkeyup=function(event)
{
	var userguess= event.key;

	for(j=0; j<word.length; j++) 
	{
		if(userguess === word.charAt(j))
		{
			space[j]=userguess;
			document.getElementById("_")= userguess;
		guesses=guesses-1;
		}
	}
}


