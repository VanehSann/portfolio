const directLinks = document.getElementById("direct-links");
const writtenInfo = document.getElementById("written-info");
const tabDirectLinks = document.querySelector(".tab-btn-direct-links");
const tabWrittenInfo = document.querySelector(".tab-btn-written-info");

function showDirectLinks() {
    directLinks.classList.add("show");
    writtenInfo.classList.remove("show");
    tabDirectLinks.classList.add("active");
    tabWrittenInfo.classList.remove("active");
}

function showWrittenInfo() {
    writtenInfo.classList.add("show");
    directLinks.classList.remove("show");
    tabWrittenInfo.classList.add("active");
    tabDirectLinks.classList.remove("active");
}

function showHide({ target }) {
    if (target.classList.value.includes("direct-links")) {
        showDirectLinks()
    }
    else {
        showWrittenInfo()
    }
}