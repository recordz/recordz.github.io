var isMobile = false;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  isMobile = true;
}

if(isMobile) {
  var banner = document.getElementById('banner');
  banner.className = "banner-mobile";
  banner.innerHTML = '';
}
