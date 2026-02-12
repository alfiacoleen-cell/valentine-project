// Save and Load Love Letter
function saveLetter() {
    const letter = document.getElementById("loveLetter").value;
    localStorage.setItem("valentineLetter", letter);
    alert("Letter saved ❤️");
}

window.onload = function () {
    const savedLetter = localStorage.getItem("valentineLetter");
    if (savedLetter) {
        document.getElementById("loveLetter").value = savedLetter;
    }
};

// Image Upload Preview
document.getElementById("imageUpload").addEventListener("change", function(event) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    Array.from(event.target.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
});

// Music Upload
document.getElementById("musicUpload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const audioPlayer = document.getElementById("audioPlayer");

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            audioPlayer.src = e.target.result;
            localStorage.setItem("valentineMusic", e.target.result);
        };
        reader.readAsDataURL(file);
    }
});

// Load saved music
window.addEventListener("load", function() {
    const savedMusic = localStorage.getItem("valentineMusic");
    if (savedMusic) {
        document.getElementById("audioPlayer").src = savedMusic;
    }
});
