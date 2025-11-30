const loginSound=new Audio("assets/windows-xp-startup.mp3");
document.getElementById("login-btn").addEventListener("click", () => {
    loginSound.play();

    document.body.classList.add("fade-out");   

    setTimeout(() => {
        window.location.href = "desktop.html";
    }, 4000);  
});

document.getElementById("restart-btn").addEventListener("click",()=>{
    window.location.href="index.html"
},);

