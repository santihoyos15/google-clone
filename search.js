const input = document.getElementById("search-box"); 
input.addEventListener("keydown", (event) => {
    if (event.key == "Enter" && input.value){
        window.location.href = `https://www.google.com/search?q=${input.value}`;
    }
});

const button = document.getElementById("google-search");
button.addEventListener("click", (event) => {
    window.location.href = `https://www.google.com/search?q=${input.value}`;
})

