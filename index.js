document.addEventListener('DOMContentLoaded', () => {
  const linksContainer = document.querySelector('.btns');

  // Карта соответствия текста кнопки и страницы для редиректа
  const urlMap = {
    'more about me': 'more.html',
    'my hobbies': 'hobbies.html',
    'my socials': 'socials.html'
  };

  if (linksContainer) {
    linksContainer.addEventListener('click', (event) => {
      const button = event.target.closest('.btn');
      if (!button) return;

      event.preventDefault();

      // Получаем чистый текст кнопки в нижнем регистре
      const buttonText = button.textContent.trim().toLowerCase();
      const targetUrl = urlMap[buttonText];

      // Если нашли страницу в карте — перенаправляем в этой же вкладке
      if (targetUrl) {
        window.location.href = targetUrl;
      }
    });
  }
});
