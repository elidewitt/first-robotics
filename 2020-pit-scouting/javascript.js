function openTab(tabName, buttonId) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(tabName).style.display = "block";
  document.getElementById(buttonId).className += " w3-red";
}

function incValue(elementId, inc, lim) {
  var element = document.getElementById(elementId);
  var value = Number(element.value);
  
  if( (value < lim) && inc) {
    document.getElementById(elementId).value = value + 1;
  }
  else if ( (value > lim) && !inc) {
    document.getElementById(elementId).value = value - 1;
  }
}