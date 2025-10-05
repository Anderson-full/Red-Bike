document.addEventListener("DOMContentLoaded", () => {
  const introducao = document.querySelector(".introducao-bg");
  const conteudo = document.querySelector(".introducao-conteudo");
  const imagem = document.querySelector(".introducao img");
  const botao = document.querySelector(".introducao a");


  introducao.style.transition = "opacity 1s ease";
  conteudo.style.transition = "transform 1s ease";
  imagem.style.transition = "all 1s ease";

  introducao.style.opacity = 0;
  conteudo.style.transform = "translateY(30px)";
  imagem.style.transform = "translateX(40px)";
  imagem.style.opacity = 0;

  setTimeout(() => {
    introducao.style.opacity = 1;
  }, 100);

 
  setTimeout(() => {
    conteudo.style.transform = "translateY(0)";
  }, 400);

  setTimeout(() => {
    imagem.style.transform = "translateX(0)";
    imagem.style.opacity = 1;
  }, 700);


  botao.addEventListener("mouseenter", () => {
    botao.style.transition = "transform 0.3s ease";
    botao.style.transform = "scale(1.05)";
  });

  botao.addEventListener("mouseleave", () => {
    botao.style.transform = "scale(1)";
  });

  botao.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  });
});
