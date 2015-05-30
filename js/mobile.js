var vidContainer = document.getElementById('vidContainer').style.height;
document.getElementById('banner').style.height = vidContainer;

var isMobile = false;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  isMobile = true;
}

if(isMobile) {
  var banner = document.getElementById('banner');
  banner.className = "banner-mobile";
  banner.innerHTML = '';
}
