document.addEventListener('DOMContentLoaded', () => {
  // Единая карта перенаправлений для всех кнопок на странице
  const urlMap = {
    // Навбар (открытие в текущей вкладке)
    'my socials': 'socials.html',
    'my hobbies': 'hobbies.html',
    'back': 'index.html',
    
    // Соцсети (открытие в новой вкладке)
    'github' : 'https://github.com/kafelbb',
    'tiktok' :'https://www.tiktok.com/@rosinfluxx',
    'youtube' : 'https://www.youtube.com/@kafelbb'
  };

  document.addEventListener('click', (event) => {
    // Ищем, нажата ли кнопка навбара (.btn) или кнопка соцсети (.linkbtn)
    const button = event.target.closest('.btn, .linkbtn');
    if (!button) return;

    event.preventDefault();

    // Получаем текст кнопки
    const buttonText = button.textContent.trim().toLowerCase();
    const targetUrl = urlMap[buttonText];

    if (targetUrl) {
      // Если ссылка внешняя (содержит http), открываем в новом окне
      if (targetUrl.startsWith('http')) {
        window.open(targetUrl, '_blank');
      } else {
        // Если внутренняя страница сайта — открываем в текущем окне
        window.location.href = targetUrl;
      }
    }
  });
});