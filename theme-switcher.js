const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeToggle.innerHTML = "Light Mode";
    }
    else{
        themeToggle.innerHTML = "Dark Mode";
    }

});