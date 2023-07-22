const directLinks = document.getElementById("direct-links");
const writtenInfo = document.getElementById("written-info");
const tabDirectLinks = document.querySelector(".tab-btn-direct-links");
const tabWrittenInfo = document.querySelector(".tab-btn-written-info");

// Função para mostrar a seção de links diretos e ocultar a seção de informações escritas
function showDirectLinks() {
    directLinks.classList.add("show");
    writtenInfo.classList.remove("show");
    tabDirectLinks.classList.add("active");
    tabWrittenInfo.classList.remove("active");
}

// Função para mostrar a seção de informações escritas e ocultar a seção de links diretos
function showWrittenInfo() {
    writtenInfo.classList.add("show");
    directLinks.classList.remove("show");
    tabWrittenInfo.classList.add("active");
    tabDirectLinks.classList.remove("active");
}

// Função para alternar entre as seções com base na classe do elemento clicado
function showHide({ target }) {
    if (target.classList.value.includes("direct-links")) {
        showDirectLinks();
    } else {
        showWrittenInfo();
    }
}

// Função para rolar suavemente para o topo da página
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para rolar suavemente para o final da página
function scrollToDown() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

// Mostrar e esconder os botões com base na rolagem da página
const buttons = document.querySelectorAll('.top-button');
let timer;

function showButtons() {
    buttons.forEach(button => {
        button.style.display = 'block';
    });
}

function hideButtons() {
    buttons.forEach(button => {
        button.style.display = 'none';
    });
}

window.addEventListener('scroll', function () {
    showButtons();
    clearTimeout(timer);
    timer = setTimeout(() => {
        hideButtons();
    }, 3000);
});

// Adicionar evento de clique ao botão dark mode
const darkBtn = document.querySelector(".dark-mode-button");
darkBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        darkBtn.innerHTML = "<i class='fa-solid fa-sun'></i>"
    } else {
        darkBtn.innerHTML = "<i class='fa-solid fa-moon'></i>"
    }
});
