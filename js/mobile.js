var isMobile = false;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//if (true) { // FOR TESTING
	isMobile = true;
}

if(isMobile) {
  var banner = document.getElementById('banner');
  banner.style.backgroundImage = "url('images/bg-mobile.jpg')";
	//banner.style.background = "linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3));";
  banner.innerHTML = '<div style="padding-top:20%;" align="center"><h1 style="font-family:Copperplate,\'Copperplate Gothic Light\', fantasy;font-size:400%;color:#fff">RECORD<font color="red">Z</font></h1><a class="download" style="font-family: Copperplate, \'Copperplate Gothic Light\', fantasy;" href="#">COMING SOON</a><br><br><br><br><a class="download" href="http://eepurl.com/bpgLIX" style="font-family: Copperplate, \'Copperplate Gothic Light\', fantasy;" href="#">Subscribe For Updates</a></div>';

}
