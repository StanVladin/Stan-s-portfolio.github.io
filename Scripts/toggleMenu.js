document.getElementById("toggleBtn").onclick = function(){
  var menuBox = document.getElementById('menuId');    
  if(menuBox.style.display == "block") { // if is menuBox displayed, hide it
      menuBox.style.display = "none";
  }
  else { // if is menuBox hidden, display it
    menuBox.style.display = "block";
  }
}; // Click on the checkbox



