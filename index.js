// let number = document.getElementById("number");
// let counter = 0;
// setInterval(() => {
//     if (counter == 95) {
//         clearInterval();
//     } else {
//         counter += 1;
//         number.innerHTML = counter + "%";
//     }
// }, 20);

// // var tabLinks = document.getElementsByClassName("tablinks");
// // var tabContents = document.getElementsByClassName("tabContents");

// // function openTab(tabName, event) {
// //     event.preventDefault();
    
// //     for (var i = 0; i < tabContents.length; i++) {
// //         tabContents[i].classList.remove("active");
// //     }

// //     document.getElementById(tabName).classList.add("active");
// // }

// // for (var i = 0; i < tabLinks.length; i++) {
// //     tabLinks[i].addEventListener("click", function(event) {
// //         openTab(this.dataset.tab, event);
// //     });
// // }


let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
    if (counter == 95) {
        clearInterval();
    } else {
        counter += 1;
        number.innerHTML = counter + "%";
    }
}, 20);

function opentab(tabName) {
    var tabs = document.getElementsByClassName("tabContents");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "flex";
}

// Rest of your code remains unchanged
