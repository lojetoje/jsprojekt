
//Byter titeln i element "Title" med newTitle
function changeTitle() {
    var newTitle = prompt("Ange ny rubrik:");
    document.getElementById("title").innerHTML = newTitle;
}

// Alertar den nuvarande tiden.
function showTime() {
var currentTime = new Date();
alert("Nuvarande tid: " + currentTime.toLocaleTimeString());
}

//Gömmer/Visar bilden med hjälp av display: none
function togglePicture() {
    var picture = document.getElementById("picture");
    picture.style.display = picture.style.display === "none" ? "block" : "none";
}

//Byter bild till den med sökvägen användaren väljer
function changePicture() {
    var picture = document.getElementById("picture");
    var newImage = prompt("Ange sökväg till ny bild:");
    picture.src = newImage;
}

//Kallar getRandomColor och sätter bakgrundsfärgen till den färgen som returnas.
function changeBackgroundColor() {
    var randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
}

//Skapar ett random färgid.
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Samma som den andra toggle men togglar min "Gray Div"/dold div.
function toggleGrayDiv() {
    var grayDiv = document.getElementById("hiddenDiv");
    grayDiv.style.display = grayDiv.style.display === "none" ? "block" : "none";
}

//Togglar min header/titel.
function toggleHeader() {
    var header = document.getElementById("title");
    header.style.display = header.style.display === "none" ? "block" : "none";
}

//Tar bort min header/titel.
function removeHeader() {
    var header = document.getElementById("title");
    header.parentNode.removeChild(header);
}

//Visar min header/titel.
function showHeader() {
    var header = document.getElementById("title");
    header.style.display = "block";
}