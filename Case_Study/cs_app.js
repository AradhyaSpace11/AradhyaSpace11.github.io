window.addEventListener("DOMContentLoaded", () => {
    const videoContainer = document.getElementById("intro-video-container");

    // Remove video after 4 seconds with slide-up effect
    setTimeout(() => {
        videoContainer.classList.add("slide-up");

        // Remove element after animation ends
        setTimeout(() => {
            videoContainer.remove();
        }, 1000); // match CSS transition duration
    }, 4000);
});


document.querySelectorAll(".code-toggle-btn").forEach(button => {
    button.addEventListener("click", () => {
        const codeBlock = button.parentElement.nextElementSibling;
        const isVisible = codeBlock.style.display === "block";

        codeBlock.style.display = isVisible ? "none" : "block";
        button.innerHTML = isVisible ? "Show Code &#9660;" : "Hide Code &#9650;";
    });
});
