var menuTop = document.querySelector("#top");
var menuToggle = document.querySelector("#menuToggle");
var menu = document.querySelector("#menu");

var darkmode = document.querySelector("#darkmode");

menuToggle.addEventListener("click", function () {
    menuTop.classList.toggle('active');
});

darkmode.addEventListener("mousedown", function (event) {
    var a = window.scrollY;

    document.body.classList.toggle('dark');

    if (document.body.classList.contains("dark")) {
        darkmode.classList.remove("fa-sun-o");
        darkmode.classList.add("fa-moon-o");
        localStorage.setItem('mdark', '1');
    } else {
        darkmode.classList.remove("fa-moon-o");
        darkmode.classList.add("fa-sun-o");
        localStorage.setItem('mdark', '0');
    }

    setTimeout(function () { window.scrollTo(0, a); }, 500);
});


window.addEventListener('scroll', function (e) {

});


if (mdark = localStorage.getItem('mdark')) {
    if (mdark === '1') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}