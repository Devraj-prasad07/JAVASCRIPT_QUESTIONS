document.addEventListener("DOMContentLoaded",function() {
    const heading = document.querySelector("#heading");
    const button = document.querySelector("#btn");

    button.addEventListener("click" ,function(){
        heading.textContent = (heading.textContent === "The Most affordable learning platform") ? "Pw Skills" : "The Most affordable learning platform"
    });
});

