document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".faq-pergunta");

  botoes.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      item.classList.toggle("ativo");
    });
  });
});