function goTo() {
  var link = window.location.href;
  var custom = link.split("sp=");
  var page = "https://kandrupr.github.io/home"
  if(custom.length == 2){
    window.location.href = page + "?sp=" + custom[1];
  } else {
    window.location.href = page;
  }
} 
