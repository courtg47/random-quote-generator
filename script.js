//Containing all quotes//
var myQuotes = [
  "</br></br>\"Anyone who has never made a mistake has never tried anything new.\" </br></br>-Albert Einstein", 
  "</br></br>\"Clarity about what matters provides clarity about what does not.\" </br></br>-Cal Newport", 
  "</br></br>\"No problem can be solved from the same level of consciousness that created it.\" </br></br>-Albert Einstein",
  "</br></br>\"There are essentially two things that will make you wise -- the books you read and the people you meet.\" </br></br>-Jack Canfield",
  "\"There is a set of advantages that have to do with material resources, and there is a set that have to do with the absence of material resources- and the reason underdogs win as often as they do is that the latter is sometimes every bit the equal of the former.\" </br></br>-Malcolm Gladwell",
  "</br>\"Success doesn\'t come from pie-in-the-sky thinking. It's the result of consciously doing something each day that will add to your overall excellence.\" </br></br>-Nick Saban",
  "</br>\"So often people are working hard at the wrong thing. Working on the right thing is probably more important than working hard.\" </br></br>-Caterina Fake",
  "</br></br>\"Smoking is one of the leading causes of statistics.\" </br></br>-Fletcher Knebel",
"</br></br>\"Knowing that things could be worse should not stop us from trying to make them better.\" </br></br>-Sheryl Sandberg",
  "\"Lieutenant Dan got me invested in some kind of fruit company [Apple computer]. So then I got a call from him, saying we don’t have to worry about money no more. And I said, that\’s good! One less thing.\" </br></br>-Forrest Gump"
];

//Choosing quote at random
function chooseQuote() {
  var randomNum = Math.floor(Math.random() * (myQuotes.length));
  document.getElementById("quote-box").innerHTML = myQuotes[randomNum];
};

//Tweeting the quote
function tweet(){
  var phrase = document.getElementById('quote-box').innerText;
  var tweetUrl = "https://twitter.com/share?text=" + encodeURIComponent(phrase);
  
  window.open(tweetUrl);
}