var isMobile = false;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  isMobile = true;
}

if(isMobile) {
  var banner = document.getElementById('banner');
  banner.style.backgroundImage = "url('images/bg-mobile.jpg')";
  banner.innerHTML = '<div style="padding-top:20%" align="center"><h1 style="font-family:Copperplate,\'Copperplate Gothic Light\', fantasy;font-size:80px;color:#fff">RECORD<font color="red">Z</font></h1><a class="download" style="font-family: Copperplate, \'Copperplate Gothic Light\', fantasy;" href="#">COMING SOON</a></div>';
	
}
