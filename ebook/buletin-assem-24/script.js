// ── CONFIG ──
const TOTAL_PAGES = 30;
const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return `pages/page-${n}.jpg`;
});

let currentPage = 0;
let doubleMode = false;
let isAnimating = false;
const STEP = () => doubleMode ? 2 : 1;

const bookContainer = document.getElementById('bookContainer');
const pageInfo = document.getElementById('pageInfo');
const progressFill = document.getElementById('progressFill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const thumbStrip = document.getElementById('thumbStrip');
const loading = document.getElementById('loadingOverlay');

// ── BUILD THUMBNAILS ──
function buildThumbs() {
  thumbStrip.innerHTML = '';
  pages.forEach((src, i) => {
    const div = document.createElement('div');
    div.className = 'thumb' + (i === 0 ? ' active' : '');
    div.dataset.idx = i;
    div.innerHTML = `<img src="${src}" loading="lazy" alt="hal ${i + 1}"><div class="thumb-num">${i + 1}</div>`;
    div.onclick = () => goToPage(i);
    thumbStrip.appendChild(div);
  });
}

// ── RENDER BOOK ──
function render() {
  bookContainer.innerHTML = '';

  if (doubleMode) {
    bookContainer.classList.add('double');
    const leftIdx = currentPage;
    const rightIdx = currentPage + 1;

    if (leftIdx < TOTAL_PAGES) {
      const sp = document.createElement('div');
      sp.className = 'static-page left';
      sp.innerHTML = `<img src="${pages[leftIdx]}" alt="Halaman ${leftIdx + 1}" draggable="false">`;
      bookContainer.appendChild(sp);
    } else {
      const sp = document.createElement('div');
      sp.className = 'static-page left';
      sp.style.background = '#f5f5f5';
      bookContainer.appendChild(sp);
    }

    if (rightIdx < TOTAL_PAGES) {
      const sp = document.createElement('div');
      sp.className = 'static-page right';
      sp.innerHTML = `<img src="${pages[rightIdx]}" alt="Halaman ${rightIdx + 1}" draggable="false">`;
      bookContainer.appendChild(sp);
    } else {
      const sp = document.createElement('div');
      sp.className = 'static-page right';
      sp.style.background = '#f5f5f5';
      bookContainer.appendChild(sp);
    }

  } else {
    bookContainer.classList.remove('double');
    const sp = document.createElement('div');
    sp.className = 'static-page left';
    sp.style.width = '100%';
    sp.innerHTML = `<img src="${pages[currentPage]}" alt="Halaman ${currentPage + 1}" draggable="false">`;
    bookContainer.appendChild(sp);
  }

  updateUI();
}

// ── FLIP ANIMATION ──
function flipForward() {
  if (isAnimating) return;
  const nextIdx = currentPage + STEP();
  if (nextIdx >= TOTAL_PAGES) return;

  if (!doubleMode) {
    isAnimating = true;
    animateSingleFlip('forward', () => {
      currentPage = nextIdx;
      render();
      isAnimating = false;
    });
    return;
  }

  isAnimating = true;
  const flipPage = document.createElement('div');
  flipPage.className = 'page-scene';
  flipPage.style.left = 'var(--page-w)';
  flipPage.style.transformOrigin = 'left center';
  flipPage.style.zIndex = 20;

  const front = document.createElement('div');
  front.className = 'page-face front';
  if (currentPage + 1 < TOTAL_PAGES) {
    front.innerHTML = `<img src="${pages[currentPage + 1]}" draggable="false">`;
  }

  const back = document.createElement('div');
  back.className = 'page-face back';
  if (nextIdx < TOTAL_PAGES) {
    back.innerHTML = `<img src="${pages[nextIdx]}" draggable="false">`;
  }

  flipPage.appendChild(front);
  flipPage.appendChild(back);
  bookContainer.appendChild(flipPage);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      flipPage.classList.add('flipped');
      flipPage.style.transform = 'rotateY(180deg)';
      setTimeout(() => {
        currentPage = nextIdx;
        render();
        isAnimating = false;
      }, 720);
    });
  });
}

function flipBackward() {
  if (isAnimating) return;
  const prevIdx = currentPage - STEP();
  if (prevIdx < 0) return;

  if (!doubleMode) {
    isAnimating = true;
    animateSingleFlip('backward', () => {
      currentPage = prevIdx;
      render();
      isAnimating = false;
    });
    return;
  }

  isAnimating = true;
  const flipPage = document.createElement('div');
  flipPage.className = 'page-scene';
  flipPage.style.left = '0';
  flipPage.style.transformOrigin = 'right center';
  flipPage.style.zIndex = 20;
  flipPage.style.transform = 'rotateY(-180deg)';

  const front = document.createElement('div');
  front.className = 'page-face front';
  if (currentPage < TOTAL_PAGES) {
    front.innerHTML = `<img src="${pages[currentPage]}" draggable="false">`;
  }

  const back = document.createElement('div');
  back.className = 'page-face back';
  if (prevIdx < TOTAL_PAGES) {
    back.innerHTML = `<img src="${pages[prevIdx]}" draggable="false">`;
  }

  flipPage.appendChild(front);
  flipPage.appendChild(back);
  bookContainer.appendChild(flipPage);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      flipPage.style.transition = 'transform 0.7s cubic-bezier(0.645, 0.045, 0.355, 1.000)';
      flipPage.style.transform = 'rotateY(0deg)';
      setTimeout(() => {
        currentPage = prevIdx;
        render();
        isAnimating = false;
      }, 720);
    });
  });
}

function animateSingleFlip(dir, cb) {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position:absolute;inset:0;background:rgba(0,0,0,0);z-index:30;
    transition:background 0.35s;pointer-events:none;
  `;
  bookContainer.appendChild(overlay);
  requestAnimationFrame(() => {
    overlay.style.background = 'rgba(0,0,0,0.4)';
    setTimeout(() => { overlay.style.background = 'rgba(0,0,0,0)'; cb(); }, 350);
  });
}

// ── NAVIGATION ──
function nextPage() { flipForward(); }
function prevPage() { flipBackward(); }

function goToPage(idx) {
  currentPage = doubleMode ? (idx % 2 === 0 ? idx : idx - 1) : idx;
  if (currentPage < 0) currentPage = 0;
  render();
  updateThumb();
  scrollThumbIntoView();
}

// ── UI UPDATE ──
function updateUI() {
  const displayLeft = currentPage + 1;
  const displayRight = doubleMode ? Math.min(currentPage + 2, TOTAL_PAGES) : currentPage + 1;

  if (doubleMode && currentPage + 1 < TOTAL_PAGES) {
    pageInfo.innerHTML = `Halaman <span>${displayLeft}–${displayRight}</span> dari <span>${TOTAL_PAGES}</span>`;
  } else {
    pageInfo.innerHTML = `Halaman <span>${displayLeft}</span> dari <span>${TOTAL_PAGES}</span>`;
  }

  const progress = ((currentPage + (doubleMode ? 2 : 1)) / TOTAL_PAGES) * 100;
  progressFill.style.width = Math.min(progress, 100) + '%';

  prevBtn.disabled = currentPage <= 0;
  nextBtn.disabled = currentPage + STEP() >= TOTAL_PAGES;

  updateThumb();
}

function updateThumb() {
  document.querySelectorAll('.thumb').forEach(t => {
    const i = parseInt(t.dataset.idx);
    t.classList.toggle('active', i === currentPage || (doubleMode && i === currentPage + 1));
  });
}

function scrollThumbIntoView() {
  const active = thumbStrip.querySelector('.thumb.active');
  if (active) active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

// ── TOGGLE VIEW ──
function toggleView() {
  doubleMode = !doubleMode;
  document.getElementById('viewIcon').textContent = doubleMode ? '📖' : '📄';
  document.getElementById('viewLabel').textContent = doubleMode ? '2 Halaman' : '1 Halaman';
  if (doubleMode && currentPage % 2 !== 0) currentPage--;
  render();
}

// ── TOGGLE THUMBS ──
function toggleThumbs() {
  thumbStrip.classList.toggle('visible');
  document.getElementById('btnThumb').classList.toggle('active');
  if (thumbStrip.classList.contains('visible')) scrollThumbIntoView();
}

// ── FULLSCREEN ──
function toggleFullscreen() {
  const overlay = document.getElementById('fullscreenOverlay');
  overlay.classList.add('active');
  document.getElementById('fullscreenImg').src = pages[currentPage];
}
function closeFullscreen() {
  document.getElementById('fullscreenOverlay').classList.remove('active');
}

// ── KEYBOARD ──
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextPage();
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevPage();
  if (e.key === 'Escape') closeFullscreen();
  if (e.key === 'f' || e.key === 'F') toggleFullscreen();
});

// ── TOUCH SWIPE ──
let touchStartX = 0;
document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) { dx < 0 ? nextPage() : prevPage(); }
});

// ── CLICK ON BOOK HALVES ──
bookContainer.addEventListener('click', e => {
  const rect = bookContainer.getBoundingClientRect();
  const x = e.clientX - rect.left;
  if (x < rect.width / 2) prevPage();
  else nextPage();
});

// ── INIT ──
function init() {
  buildThumbs();
  render();
  pages.slice(0, 6).forEach(src => {
    const img = new Image();
    img.src = src;
  });
  setTimeout(() => {
    loading.classList.add('hidden');
    setTimeout(() => loading.style.display = 'none', 500);
  }, 800);
}

init();

// ── DROPDOWN MENU ──
function toggleMenu() {
  document.getElementById('headerMenu').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('headerMenu').classList.remove('open');
}
document.addEventListener('click', e => {
  const menu = document.getElementById('headerMenu');
  if (!menu.contains(e.target)) closeMenu();
});
