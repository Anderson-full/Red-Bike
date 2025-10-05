document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll('.bicicleta, .bicicleta-lista li');

  elementos.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.transition = 'all 0.8s ease';
      }
    });
  }, { threshold: 0.2 });

  elementos.forEach(el => observer.observe(el));
});