// Javascript for opening and closeing the tabs *******************
const categories = document.getElementsByClassName("header");

for (category of categories) {
  category.addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// Collapse All *********************************************
document.getElementById("collapse").onclick = function() {
  for (category of categories) {
    category.classList.remove("active");
    category.nextElementSibling.style.maxHeight = null;
  }
  return false;
}


// Expand All *********************************************
document.getElementById("expand").onclick = function() {
  for (category of categories) {
    category.classList.add("active");
    category.nextElementSibling.style.maxHeight = category.nextElementSibling.scrollHeight + "px";
  }
  return false;
}


// Arena Modal ***********************************************
const arenaModal = document.getElementById("arenaModal");
document.getElementById("openArena").onclick = function() {
  arenaModal.style.display = "block";
  return false; // prevent submission
}

// When the user clicks on <span> (x), close the modal
arenaModal.getElementsByClassName("close")[0].onclick = function() {
  arenaModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == arenaModal) {
    arenaModal.style.display = "none";
  }
}