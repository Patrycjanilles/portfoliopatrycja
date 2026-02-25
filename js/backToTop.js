document.addEventListener("DOMContentLoaded", function () {
    const topButton = document.querySelector(".top_button");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) { 
            topButton.classList.add("visible");
        } else {
            topButton.classList.remove("visible");
        }
    });
});
  