const menu = document.querySelector(".menu");
const nav = document.querySelector("nav")

menu.addEventListener("click", () => {
    nav.classList.add("nav-active");
    console.log(`ok`);
});

document.addEventListener("click", (e) => {
    if (e.target.contains(menu)) {
        nav.classList.remove("nav-active");
        console.log('helo')
    }
});
