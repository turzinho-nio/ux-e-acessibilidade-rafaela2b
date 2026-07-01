const contrastToggle = document.getElementById('contrastToggle');
const year = document.getElementById('year');
const form = document.querySelector('.access-form');
const formStatus = document.getElementById('formStatus');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (contrastToggle) {
  contrastToggle.addEventListener('click', () => {
    document.body.classList.toggle('contrast');
    const isActive = document.body.classList.contains('contrast');
    contrastToggle.setAttribute('aria-pressed', String(isActive));
    contrastToggle.textContent = isActive ? 'Desativar alto contraste' : 'Ativar alto contraste';
  });
}

if (form && formStatus) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    formStatus.hidden = false;
    formStatus.textContent = 'Mensagem recebida. Obrigado por contribuir com a acessibilidade!';
    form.reset();
  });
}
