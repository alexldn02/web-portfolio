var audio = $("#tapeDispenser")[0];
audio.volume = 0.4;
audio.currentTime = 10;
document.getElementById("myMusic").addEventListener("mouseenter", function() {
    audio.play();
});
document.getElementById("myMusic").addEventListener("mouseleave", function() {
    audio.pause();
});

var audio2 = $("#synth")[0];
audio2.volume = 0.4;
audio2.currentTime = 0;
document.getElementById("software").addEventListener("mouseenter", function() {
    audio2.play();
});
document.getElementById("software").addEventListener("mouseleave", function() {
    audio2.pause();
});

var audio3 = $("#demo")[0];
audio3.volume = 0.5;
audio3.currentTime = 90;
document.getElementById("demos").addEventListener("mouseenter", function() {
    audio3.play();
});
document.getElementById("demos").addEventListener("mouseleave", function() {
    audio3.pause();
});

var audio4 = $("#typing")[0];
audio4.volume = 0.4;
audio4.currentTime = 0;
document.getElementById("about").addEventListener("mouseenter", function() {
    audio4.play();
});
document.getElementById("about").addEventListener("mouseleave", function() {
    audio4.pause();
});