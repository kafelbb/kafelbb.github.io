document.addEventListener('DOMContentLoaded', () => {

  const linksContainer = document.querySelector('.btns');
  const urlMap = {
    'more about me': 'more.html',
    'back': 'index.html',
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

const mainWrapper = document.querySelector('.cc');
if (mainWrapper) {
  mainWrapper.addEventListener('click', (event) => {
    const img = event.target.closest('img');
    if (!img) return;
    
    const idValue = img.getAttribute('id') ? img.getAttribute('id').trim() : '';

    const isUrl = /^(https?:\/\/|\/)/i.test(idValue) || /\.(mp4|mkv|avi|mov|html|php|png|jpg)$/i.test(idValue);

    if (isUrl) {
      window.open(idValue, '_blank');
    } else {
      window.open(img.src, '_blank');
    }
  });

    mainWrapper.addEventListener('click', (event) => {
      const audioBtn = event.target.closest('.abtn');
      if (!audioBtn) return;

      const audioUrl = audioBtn.getAttribute('id') ? audioBtn.getAttribute('id').trim() : '';
      if (audioUrl) {
        window.open(audioUrl, '_blank');
      }
});

}

const cards = Array.from(document.querySelectorAll('.cc > .crd'));

  
  const titleBlock = document.querySelector('.ctitle');
  const prevBtn = document.querySelector('.controls .cbtn:first-child');
  const nextBtn = document.querySelector('.controls .cbtn:last-child');

  let currentIdx = 0;

  if (cards.length > 0) {
    const activeStartIndex = cards.findIndex(card => !card.classList.contains('hcrd'));
    if (activeStartIndex !== -1) {
      currentIdx = activeStartIndex;
    }
    updateTitle();
  }

  function updateTitle() {
  if (titleBlock && cards[currentIdx]) {
    const cardName = cards[currentIdx].getAttribute('name');

    const linkInside = titleBlock.querySelector('a');
    
    if (linkInside) {
      linkInside.textContent = cardName ? cardName : 'portfolio';
    } else {
      titleBlock.textContent = cardName ? cardName : 'portfolio';
    }
  }
}


  function changeCard(newIdx) {
    if (cards.length === 0) return;

    cards[currentIdx].classList.add('hcrd');

    currentIdx = newIdx;

    cards[currentIdx].classList.remove('hcrd');

    updateTitle();
  }

  if (prevBtn && nextBtn && cards.length > 0) {
    prevBtn.addEventListener('click', () => {
      const nextIndex = (currentIdx - 1 + cards.length) % cards.length;
      changeCard(nextIndex);
    });

    nextBtn.addEventListener('click', () => {
      const nextIndex = (currentIdx + 1) % cards.length;
      changeCard(nextIndex);
    });
  }
});

