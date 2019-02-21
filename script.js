window.onload = function fillBar() {
    var progress = document.getElementById("progress");
    var percentage = document.getElementById("percentage");
    var width = 1;
    var id = setInterval(frame, 100);
    function frame() {
      width++;
      progress.style.width = `${width}%`;
      percentage.innerHTML = `${width}%`;
  
      if (width === 100) {
        clearInterval(id);
      }
    }
  };
  