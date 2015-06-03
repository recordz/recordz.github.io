var audioElement = document.createElement('audio');

function play(){
	audioElement.setAttribute('src', 'songs/stay.mp3');
  audioElement.load();
	audioElement.play();
}
function play2(){
	audioElement.setAttribute('src', 'songs/myLast.mp3');
  audioElement.load();
	audioElement.play();
}
function play3(){
   audioElement.setAttribute('src', 'songs/closer.mp3');
   audioElement.load();
   audioElement.play();
}
function play4(){
    audioElement.setAttribute('src', 'songs/truffleButter.mp3');
    audioElement.load();
	audioElement.play();
}
function play5(){
    audioElement.setAttribute('src', 'songs/thinkingOutLoud.mp3');
    audioElement.load();
	audioElement.play();
}
function play6(){
    audioElement.setAttribute('src', 'songs/seeYouAgain.mp3');
    audioElement.load();
	audioElement.play();
}
function play7(){
    audioElement.setAttribute('src', 'songs/badBlood.mp3');
    audioElement.load();
	audioElement.play();
}
function play8(){
    audioElement.setAttribute('src', 'songs/wetDreamz.mp3');
    audioElement.load();
	audioElement.play();
}
function play9(){
    audioElement.setAttribute('src', 'songs/survival.mp3');
    audioElement.load();
	audioElement.play();
}
function play10(){
  audioElement.setAttribute('src', 'songs/theHills.mp3');
  audioElement.load();
	audioElement.play();
}
function play11(){
	audioElement.setAttribute('src', 'songs/kickTheDustUp.mp3');
	audioElement.load();
	audioElement.play();
}
function play12(){
	audioElement.setAttribute('src', 'songs/drunkInLove.mp3');
	audioElement.load();
	audioElement.play();
}
function play13(){
	audioElement.setAttribute('src', 'songs/heyMama.mp3');
	audioElement.load();
	audioElement.play();
}
function play14(){
	audioElement.setAttribute('src', 'songs/i.mp3');
	audioElement.load();
	audioElement.play();
}
function play15(){
	audioElement.setAttribute('src', 'songs/alright.mp3');
	audioElement.load();
	audioElement.play();
}
function play16(){
	audioElement.setAttribute('src', 'songs/theHills.mp3');
	audioElement.load();
	audioElement.play();
}
function play17(){
	audioElement.setAttribute('src', 'songs/sheWildin.mp3');
	audioElement.load();
	audioElement.play();
}
function play18() {
	audioElement.setAttribute('src', 'songs/theNever.mp3');
	audioElement.load();
	audioElement.play();
}
function play19() {
	audioElement.setAttribute('src', 'songs/10Bands.mp3');
	audioElement.load();
	audioElement.play();
}
function play20() {
	audioElement.setAttribute('src', 'songs/takeMeToChurch.mp3');
	audioElement.load();
	audioElement.play();
}
function play21() {
	audioElement.setAttribute('src', 'songs/iMeanIt.mp3');
	audioElement.load();
	audioElement.play();
}

var tempImageSource;

function playOverlay(i){
	var id = "artist"+i+"Image";
	tempImageSource = document.getElementById(id).src;
	//document.getElementById(id).src="images/playSong.png";
	var elements = document.getElementsByClassName(id);
	for (var i = 0; i < elements.length; i++) {
		elements[i].src = "images/playSong.png";
	}
}

function returnArtist(i){
	var id = "artist"+i+"Image";
	//document.getElementById(id).src = tempImageSource;
	var elements = document.getElementsByClassName(id);
	for (var i = 0; i < elements.length; i++) {
		elements[i].src = tempImageSource;
	}
}
