var audio = $("#mySoundClip")[0];
audio.volume = 0.2; // Set the volume to 50%
document.getElementById("myMusic").addEventListener("mouseenter", function() {
    audio.play();
});
document.getElementById("myMusic").addEventListener("mouseleave", function() {
    audio.pause();
});

var audio2 = $("#synth")[0];
audio2.volume = 0.2; // Set the volume to 50%
document.getElementById("software").addEventListener("mouseenter", function() {
    audio2.play();
});
document.getElementById("software").addEventListener("mouseleave", function() {
    audio2.pause();
});