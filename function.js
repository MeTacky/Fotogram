let ImagesList = [
    "./img/a_team.jpeg",
    "./img/auf_achse.jpeg",
    "./img/airwolf.jpg",
    "./img/Chip-und-Chap-Die-Ritter-des-Rechts.l.jpg",
    "./img/Die-Gummibaerenbande.jpg",
    "./img/Eine_schrecklich_nette_Familie1.jpg",
    "./img/knight_rider.jpg",
    "./img/magnum.jpg",
    "./img/miami.jpeg",
    "./img/star_trek.jpg",
    "./img/street_hawk.jpg"
];

let description = [
    "A-Team",
    "Auf Achse",
    "Airwolf",
    "Chip und Chap",
    "Die Gummibärenbande",
    "Eine schrecklich nette Familie",
    "Knight Rider",
    "Magnum",
    "Miami Vice",
    "Star Trek",
    "Street Hawk"
];

let currentIndex = 0;

function getImagesHtml(index) {
    return `
        <div class="img">
            <img src="${ImagesList[index]}" class="img" id="img" alt="${description[index]}" onclick="toggleOverlay(${index})" tabindex="0" onkeydown="if(event.key==='Enter' || event.key===' ') toggleOverlay(${index})"/>
            
        </div> `;
}

function renderImages() {
    let container = document.getElementById("container");
    container.innerHTML = "";
    for (let i = 0; i < ImagesList.length; i++) {
        container.innerHTML += getImagesHtml(i);
    }
}
window.onload = renderImages;

function creatDialogContent(i) {
    toggleOverlay();
    let dialogRef = document.getElementById("overlay_dialog");
    dialogRef.innerHTML = getImageInDialogHtml(i);
}
function toggleOverlay() {
    let overlayRef = document.getElementById("overlay");
    overlayRef.classList.toggle("d_none");
}
function toggleOverlay(index = null) {
    let overlayRef = document.getElementById("overlay");
    let overlayImage = document.getElementById("overlayImage");
    let overlayTitle = document.getElementById("overlayTitle");

    if (index !== null) {
        currentIndex = index;
        overlayRef.classList.remove("d_none");
        overlayImage.src = `${ImagesList[currentIndex]}`;           //geht OHNE Pfad...weil? 
        overlayTitle.textContent = description[currentIndex];
        document.addEventListener("keydown", escCloseOverlay);
    }
    else {
        overlayRef.classList.add("d_none");
        document.removeEventListener("keydown", escCloseOverlay);
    }
}
function showNextImage() {
    currentIndex = (currentIndex + 1) % ImagesList.length;
    OverlayImagesAndTitles();
}
function showPreviousImage() {
    currentIndex =
        (currentIndex - 1 + ImagesList.length) % ImagesList.length;
    OverlayImagesAndTitles();
}
function OverlayImagesAndTitles() {
    const overlayImage = document.getElementById("overlayImage");
    const overlayTitle = document.getElementById("overlayTitle");
    overlayImage.src = `${ImagesList[currentIndex]}`;              //geht OHNE Pfad.....weil?
    overlayTitle.textContent = description[currentIndex];          //lern schreiben oder strg C+V   >.<
}
function escCloseOverlay(event) {
  if (event.key === 'Escape') {
    toggleOverlay();
  }
}

// Pfeile img ausbessern...bilder bundy/star_trek/ magnum...neu