document.getElementById("login-btn").addEventListener("click", () => {

    document.body.classList.add("fade-out");   // start fade

    setTimeout(() => {
        window.location.href = "desktop.html"; // go to next page
    }, 500);   // same as CSS transition time (0.5s)
});

document.getElementById("restart-btn").addEventListener("click",()=>{
    window.location.href="index.html"
},);