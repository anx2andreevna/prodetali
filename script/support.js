const accordionItems = Array.from(document.querySelectorAll(".accordion__box"))

accordionItems.forEach ((item) => {
    item.addEventListener("click", accordionHandler);
})

function accordionHandler(e) {
    e.preventDefault();
    let currentBox = e.target.closest(".accordion__box");
    let currentContent = currentBox.querySelector(".accordion__content");

    currentBox.classList.toggle("active");
    
    if (currentBox.classList.contains("active")) {
        currentContent.style.maxHeight = currentContent.scrollHeight + "px";

    } else {
        currentContent.style.maxHeight = 0;
    }
}