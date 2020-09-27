var text = 'Wellcome to Thai Nguyen'
var i = 0;


function typing() {
    if (i < text.length) {
        document.getElementById('text-white').innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 150);
    } else {
        eraser();
    }
}
typing();

function eraser() {
    if (i >= 0) {
        var temp = text.substring(0, i);
        document.getElementById('text-white').innerHTML = temp;
        i--;
        setTimeout(eraser, 70);
    } else {
        typing();
    }
}