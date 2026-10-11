document.addEventListener('DOMContentLoaded', () => {
  const linksContainer = document.querySelector('.btns');

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

      const buttonText = button.textContent.trim().toLowerCase();
      const targetUrl = urlMap[buttonText];

      if (targetUrl) {
        window.location.href = targetUrl;
      }
    });
  }
});
