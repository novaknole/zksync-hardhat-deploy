! function() {
    "use strict";
    ! function() {
        const e = document.querySelector(".sidr-toggle"),
            t = document.querySelector("#sidr"),
            c = document.querySelector(".close-menu-btn");
        e.addEventListener("click", (function(e) {
            t.classList.toggle("toggled")
        })), c.addEventListener("click", (function(e) {
            t.classList.toggle("toggled")
        }));
        const n = document.querySelectorAll(".collapse-toggle");
        console.log("awesome"), n.forEach((function(e) {
            console.log("this is great");
            const t = () => e.classList.toggle("toggled");
            e.addEventListener("click", t);
            const c = [...e.parentElement.children].find((e => e.matches("span.nav-link")));
            c?.addEventListener("click", t)
        }))
    }(),
    console.log("fuck yeah")
}();