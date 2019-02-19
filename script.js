window.onload = function fillBar() {
    var progress = document.getElementsByClassName("progress");
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (progress == 100) {
            clearInterval(id)
        } else {
            progress.style.width = progress++;
        }
    }
}