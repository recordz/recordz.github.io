var isMobile = false;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//if (true) { // FOR TESTING
	isMobile = true;
}

if(isMobile) {
  var banner = document.getElementById('banner');
	banner.style.background = 'url("images/bg-mobile.jpg")';
	banner.style.backgroundPosition = 'center top';
	banner.style.backgroundRepeat = 'no-repeat';
	banner.style.width = '100%';
	banner.style.overflow = 'hidden';
	//banner.style.background = "linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3));";
  banner.innerHTML = '<div style="padding-top:20%;" align="center"><h1 style="font-family:Copperplate,\'Copperplate Gothic Light\', fantasy;font-size:400%;color:#fff">RECORD<font color="red">Z</font></h1><a class="download" style="font-size:100%;font-family: Copperplate, \'Copperplate Gothic Light\', fantasy;margin-top:15%" href="#">COMING SOON</a><br><a class="download" href="http://eepurl.com/bpgLIX" style="font-size:100%;font-family: Copperplate, \'Copperplate Gothic Light\', fantasy;margin-top:5%;" href="#">Subscribe For Updates</a></div>';
}

document.getElementById('splashscreen').style.display = 'none';
