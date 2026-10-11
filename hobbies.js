document.addEventListener('DOMContentLoaded', () => {
  const urlMap = {
    'my socials': 'socials.html',
    'more about me': 'more.html',
    'back': 'index.html',

    'github' : 'https://github.com/kafelbb',
    'tiktok' :'https://www.tiktok.com/@rosinfluxx',
    'youtube' : 'https://www.youtube.com/@kafelbb'
  };

  document.addEventListener('click', (event) => {
    const button = event.target.closest('.btn, .linkbtn');
    if (!button) return;

    event.preventDefault();

    const buttonText = button.textContent.trim().toLowerCase();
    const targetUrl = urlMap[buttonText];

    if (targetUrl) {
      if (targetUrl.startsWith('http')) {
        window.open(targetUrl, '_blank');
      } else {
        window.location.href = targetUrl;
      }
    }
  });
});
  document.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
      const mediaUrl = event.target.id ? event.target.id.trim() : '';

      if (mediaUrl === '0' || mediaUrl === '') {
        window.location.href = event.target.src
      } else {
        window.open(mediaUrl, '_blank');
      }
    }
  });
