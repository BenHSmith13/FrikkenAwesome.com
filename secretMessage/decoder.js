/**
 * Created by bensmith on 9/6/15.
 */

function decoder(field){
	var values = document.getElementById(field).value.split(" ");
	var output = "";
	for (var i = 0; i < values.length; i++){
		output += String.fromCharCode(parseInt(values[i], 16));
	}

	switch (field){
		case 'message1':
			document.getElementById('out1').innerText = output;
			break;
		case 'message2':
			document.getElementById('out2').innerText = output;
			break;
		case 'message3':
			document.getElementById('out3').innerText = output;
			break;
		case 'message4':
			document.getElementById('out4').innerText = output;
			break;
		default:
			break;
	}
}

var carousel = "<div id='carousel-example-generic' class='carousel slide' data-ride='carousel'>" +
	"<!-- Indicators -->" +
	"<ol class='carousel-indicators'>" +
		"<li data-target='#carousel-example-generic' data-slide-to='0' class='active'></li>" +
		"<li data-target='#carousel-example-generic' data-slide-to='1'></li>" +
		"<li data-target='#carousel-example-generic' data-slide-to='2'></li>" +
		"<li data-target='#carousel-example-generic' data-slide-to='3'></li>" +
		"<li data-target='#carousel-example-generic' data-slide-to='4'></li>" +
		"<li data-target='#carousel-example-generic' data-slide-to='5'></li>" +
		"<li data-target='#carousel-example-generic' data-slide-to='6'></li>" +
		"<li data-target='#carousel-example-generic' data-slide-to='7'></li>" +
		"<li data-target='#carousel-example-generic' data-slide-to='8'></li>" +
	"</ol>" +

	"<!-- Wrapper for slides -->" +
	"<div class='carousel-inner' role='listbox'>" +
		"<div class='item active'>" +
			"<img src='imgs/wellDresses.jpg' alt='...'>" +
				"<div class='carousel-caption'>" +
					"..." +
				"</div>" +
			"</div>" +
			"<div class='item'>" +
				"<img src='imgs/assaultRifle.jpeg' alt='...'>" +
				"<div class='carousel-caption'>" +
					"..." +
				"</div>" +
			"</div>" +
			"<div class='item'>" +
				"<img src='imgs/aviator.jpg' alt='...'>" +
				"<div class='carousel-caption'>" +
					"..." +
				"</div>" +
			"</div>" +
			"<div class='item'>" +
				"<img src='imgs/fishing.jpg' alt='...'>" +
				"<div class='carousel-caption'>" +
					"..." +
				"</div>" +
			"</div>" +
			"<div class='item'>" +
				"<img src='imgs/iceCream.jpg' alt='...'>" +
				"<div class='carousel-caption'>" +
					"..." +
				"</div>" +
			"</div>" +
		"<div class='item'>" +
			"<img src='imgs/luchador.jpg' alt='...'>" +
			"<div class='carousel-caption'>" +
				"..." +
			"</div>" +
		"</div>" +
		"<div class='item'>" +
			"<img src='imgs/rmMotoClub.jpg' alt='...'>" +
			"<div class='carousel-caption'>" +
				"..." +
			"</div>" +
		"</div>" +
		"<div class='item'>" +
			"<img src='imgs/starWars.jpg' alt='...'>" +
			"<div class='carousel-caption'>" +
				"..." +
			"</div>" +
		"</div>" +
		"<div class='item'>" +
			"<img src='imgs/valet.jpg' alt='...'>" +
			"<div class='carousel-caption'>" +
				"..." +
			"</div>" +
		"</div>" +
		"..." +
	"</div>" +

"<!-- Controls -->" +
"<a class='left carousel-control' href='#carousel-example-generic' role='button' data-slide='prev'>" +
"<span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>" +
"<span class='sr-only'>Previous</span>" +
"</a>" +
"<a class='right carousel-control' href='#carousel-example-generic' role='button' data-slide='next'>" +
"<span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>" +
"<span class='sr-only'>Next</span>" +
"</a>" +
"</div>";

var tawniCarousel = "<div id='carousel-example-generic' class='carousel slide' data-ride='carousel'>" +
	"<!-- Indicators -->" +
	"<ol class='carousel-indicators'>" +
		"<li data-target='#carousel-example-generic' data-slide-to='0' class='active'></li>" +
		"<li data-target='#carousel-example-generic' data-slide-to='1'></li>" +
	"</ol>" +

	"<!-- Wrapper for slides -->" +
	"<div class='carousel-inner' role='listbox'>" +
		"<div class='item active'>" +
			"<img src='imgs/iHeartU.jpg' alt='...'>" +
				"<div class='carousel-caption'>" +
					"..." +
				"</div>" +
			"</div>" +
			"<div class='item'>" +
				"<img src='imgs/inLove.jpg' alt='...'>" +
				"<div class='carousel-caption'>" +
					"..." +
				"</div>" +
			"</div>" +
		"</div>" +
		"..." +
	"</div>" +

"<!-- Controls -->" +
"<a class='left carousel-control' href='#carousel-example-generic' role='button' data-slide='prev'>" +
"<span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>" +
"<span class='sr-only'>Previous</span>" +
"</a>" +
"<a class='right carousel-control' href='#carousel-example-generic' role='button' data-slide='next'>" +
"<span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>" +
"<span class='sr-only'>Next</span>" +
"</a>" +
"</div>";

var audio = new Audio('audio/RelientK_BeMyEscape.mp3');
var swAudio = new Audio('audio/StarWarsTheme.mp3');

function bonus(){
	var input = document.getElementById('bonusMessage').value;

	switch (input){
		case "Rain":
		case "rain":
			document.getElementsByTagName('body')[0].style.backgroundImage = 'url("http://wallpaperbang.com/wp-content/uploads/2015/08/Rain-HD-Wallpapers.jpg")';
			document.getElementsByTagName('body')[0].style.color = 'white';
			break;
		case "Washington":
		case "washington":
		case "seattle":
		case "Seattle":
			document.getElementsByClassName('banner')[0].style.backgroundImage = 'url("http://www.asp-wa.com/images/ASP-banner-2.jpg")';
			break;
		case "puppies":
		case "Puppies":
		case "puppy":
		case "Puppy":
		case "Dog":
		case "dog":
		case "Dogs":
		case "dogs":
			document.getElementById('bonus').innerHTML = "<div>" +
				"<iframe src='http://openpuppies.com/' ></iframe>" +
				"<p>Click in the Frame and push space</p>" +
				"</div>";
			break;
		case 'Ben':
			document.getElementById('bonus').innerHTML = carousel;
			break;
		case "burritos":
		case "burrito":
			document.getElementById('bonus').innerHTML = "<img src='https://media1.giphy.com/media/kum9D2Wqqxyrm/200w_d.gif' />";
			break;
		case "Burritos":
		case "Burrito":
			document.getElementById('bonus').innerHTML = "<img src='http://24.media.tumblr.com/a06743193c6dabe66c4718daf60ab801/tumblr_mel2z5WP0Y1qa6spbo1_250.gif' />";
			break;
		case 'music':
		case 'Music':
			swAudio.pause();
			audio.play();
			break;
		case 'starwars':
		case 'star wars':
		case 'Starwars':
		case 'Star Wars':
			audio.pause();
			swAudio.play();
			break;
		case "Tawni":
		case 'love':
		case 'Love':
			document.getElementById('bonus').innerHTML = tawniCarousel;
			break;
    case 'Harrison Ford':
    case 'harrison ford':
      document.getElementById('bonus').innerHTML = "<img src='http://24.media.tumblr.com/11c87f6a2deb4535c97b908178fe2f3e/tumblr_mgyf5c9bU01qetk25o1_250.gif' />";
      break;
    case 'Indiana Jones':
      document.getElementById('bonus').innerHTML = "<img src='http://2.bp.blogspot.com/-e5d2ltnJ2Rk/U8LCul0muRI/AAAAAAAB2Ig/Ox5bCQG7D1U/s1600/harrison+ford11.gif' />";
      break;
    case 'indiana jones':
      document.getElementById('bonus').innerHTML = "<img src='http://ak-hdl.buzzfed.com/static/2013-11/enhanced/webdr06/22/14/anigif_original-grid-image-30208-1385149291-3.gif' />";
      break;
    case 'Han Solo':
      document.getElementById('bonus').innerHTML = "<img src='http://ak-hdl.buzzfed.com/static/2013-11/enhanced/webdr01/22/15/anigif_enhanced-buzz-23372-1385151004-11.gif' />";
      break;
    case 'han solo':
      document.getElementById('bonus').innerHTML = "<img src='http://media.giphy.com/media/umuDPcy78IbkY/giphy.gif' />";
      break;
    case 'Elephant':
      break;
    case 'Benjamin Hayden Smith':
      break;
		default:
			break
	}
}
