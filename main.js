//slider js
var count = 0;
var inc = 0;
var margin = 0;
var slider = document.getElementsByClassName("slider-content")[0];
var itemDisplay = 0;
if (screen.width > 990) {
    itemDisplay = document.getElementsByClassName("section-7")[0].getAttribute("item-display-d");
    margin = itemDisplay * 5;
}
console.log(itemDisplay)
if (screen.width > 700 && screen.width < 990) {
    itemDisplay = document.getElementsByClassName("section-7")[0].getAttribute("item-display-t");
    margin = itemDisplay * 6.8;
}
if (screen.width > 280 && screen.width < 700) {
    itemDisplay = document.getElementsByClassName("section-7")[0].getAttribute("item-display-m");
    margin = itemDisplay * 20;
}

var item = document.getElementsByClassName("item");
var itemleft = item.length % itemDisplay;
var itemSlide = Math.floor(item.length / itemDisplay) - 1;
for (let i = 0; i < item.length; i++) {
    item[i].style.width = (screen.width / itemDisplay) - margin + "px";
}

function next() {
    if (inc !== itemSlide + itemleft) {
        if (inc == itemSlide) {
            inc = inc + itemleft;
            count = count - (screen.width / itemDisplay) * itemleft;
        }
        else {
            inc = inc + 1;
            count = count - screen.width;
        }
    }

    slider.style.left = count + "px";
}

function prev() {
    if (inc !== 0) {
        if (inc == itemleft) {
            inc = inc - itemleft;
            count = count + (screen.width / itemDisplay) * itemleft;
        }
        else {
            inc = inc - 1;
            count = count + screen.width;
        }
    }

    slider.style.left = count + "px";
}
//slider js end


//toggle menue 
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  //toggle menue end