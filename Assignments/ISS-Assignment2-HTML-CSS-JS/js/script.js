
function changeColor(color) {
    document.body.style.background = color;
}

function Run() {
    changeColor('red');
}
function Run1() {
    changeColor('green');
}
function Run2() {
    changeColor('blue');
}
function Run3() {
    changeColor('pink');
}

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img);
}
function spu() {
    document.getElementById("img").src = "images/covi.png";
}
function covi() {
    document.getElementById("img").src = "images/spu.png";
}

var menu = document.getElementById("menu");
var lis = menu.getElementsByTagName("li");

for (var i = 0; i < lis.length; i++) {
    var li = lis[i];
    li.addEventListener("mouseover", function () {
        this.getElementsByTagName("a")[0].style.color = "#8080ff";
    });
    li.addEventListener("mouseout", function () {
        this.getElementsByTagName("a")[0].style.color = "#000000";
    });
}

function change_image() {
    var x = document.getElementById('changingimage')
    var str = document.getElementById('changingimage').src;
    if (str.includes("COLLEGE.png")) {
        x.src = "../img/1.png";
    } else if (str.includes("1.png")) {
        x.src = "../img/2.png";
    } else if (str.includes("2.png")) {
        x.src = "../img/3.png";
    } else if (str.includes("3.png")) {
        x.src = "../img/4.png";
    } else if (str.includes("4.png")) {
        x.src = "../img/COLLEGE.png";
    } else {
        x.src = "";
    }
}

var sheet = window.document.styleSheets[0];
sheet.insertRule('#menu li:hover a { color: "blue"; }', sheet.cssRules.length);

function productBuildTableRow(id) {
    var ret = "<tr>" +
        "<td>" +
        "<button type='button' onclick='productDisplay(this);' class='btn btn-default' data-id='" + id + "'>" +
        "<span class='glyphicon glyphicon-edit' />" +
        "</button>" +
        "</td>" +
        "<td>" + $("#productname").val() + "</td>" +
        "<td>" + $("#introdate").val() + "</td>" +
        "<td>" + $("#url").val() + "</td>" +
        "<td>" +
        "<button type='button' onclick='productDelete(this);' class='btn btn-default' data-id='" + id + "'>" +
        "<span class='glyphicon glyphicon-remove' />" +
        "</button>" +
        "</td>" +
        "</tr>"

    return ret;
}

function productAddToTable() {
    // Does tbody tag exist? add one if not
    if ($("#productTable tbody").length == 0) {
        $("#productTable").append("<tbody></tbody>");
    }

    // Append product to table
    $("#productTable tbody").append(productBuildTableRow(_nextId));

    // Increment next ID to use
    _nextId += 1;
}

function getOption() {
    selectElement =
        document.querySelector('#level');

    output = selectElement.value;

    document.querySelector('.output').textContent
        = output;
}
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}