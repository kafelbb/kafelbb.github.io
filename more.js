document.addEventListener('DOMContentLoaded', () => {
  const urlMap = {
    'my socials': 'socials.html',
    'my hobbies': 'hobbies.html',
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