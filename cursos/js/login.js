const fondo = document.querySelector(".fondo");
const loginlink = document.querySelector(".login-link");
const registrarlink = document.querySelector(".registrar-link");
const btnlogin = document.querySelector(".btn-login");
const iconocerrar = document.querySelector(".icono-cerrar");

registrarlink.addEventListener("click", () => {
    fondo.classList.add("active");
});

loginlink.addEventListener("click", () => {
    fondo.classList.remove("active");
});

btnlogin.addEventListener("click", () => {
    fondo.classList.add("active.btn-login");
});

iconocerrar.addEventListener("click", () => {
    fondo.classList.remove("active-btn-login");
});
