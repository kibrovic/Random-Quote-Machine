var quotes = [["“Don't cry because it's over, smile because it happened.”" , "Dr. Seuss"], ["“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", "Bernard M. Baruch"], ["“You've gotta dance like there's nobody watching, \n Love like you'll never be hurt, \nSing like there's nobody listening, \n And live like it's heaven on earth.” ", "William W. Purkey"], ["“In three words I can sum up everything I've learned about life: it goes on.” ", "Robert Frost"], ["“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.” ", "J.K. Rowling"], ["“Be yourself; everyone else is already taken.”", "Oscar Wilde"], ["“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", "Bernard M. Baruch"], ["“So many books, so little time.”", "Frank Zappa"], ["“A room without books is like a body without a soul.”", "Marcus Tullius Cicero"], ["“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”", "J.K. Rowling, Harry Potter and the Goblet of Fire"] ];
var i=Math.floor(Math.random() * quotes.length);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



$(document).ready(function(){
$(".quote-box").html(quotes[i][0]).css("color", "lightblue");
$(".author").html(quotes[i][1]).css("color", "lightblue");
$(".random").click(function(){
	$(".container, .footer").fadeOut(1000);
	var j=getRandomColor();
	i=Math.floor(Math.random() * quotes.length);
	window.setTimeout(function(){
		$(".quote-box").html(quotes[i][0]).css("color", j);
		$(".author").html(quotes[i][1]).css("color", j);
		$(".container, .footer").fadeIn(1000);
	},1100);
	

	$("body").css({'background': 'linear-gradient(to bottom right, '+ j +','+ getRandomColor()+')'});
	$("button").css("background", j);
});

$(".twitter").click(function(){
	$('#tweet').attr("href", 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + quotes[i][0] + ' -' + quotes[i][1]);

});



});