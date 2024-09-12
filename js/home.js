
const moreLink = document.querySelector('.more');
const moreLinks = document.querySelector('.more-links');
let timeout;

moreLink.addEventListener('mouseenter', () => {
  clearTimeout(timeout); 
  showMoreLinks(); 
});

moreLink.addEventListener('mouseleave', () => {
  timeout = setTimeout(hideMoreLinks, 2000); 
});

moreLinks.addEventListener('mouseenter', () => {
  clearTimeout(timeout); 
});

moreLinks.addEventListener('mouseleave', () => {
  timeout = setTimeout(hideMoreLinks, 2000); 
});

function showMoreLinks() {
  moreLinks.style.opacity = 1; 
  moreLinks.style.visibility = 'visible';
  moreLinks.style.pointerEvents = 'auto'; 
}

function hideMoreLinks() {
  moreLinks.style.opacity = 0; 
  moreLinks.style.visibility = 'hidden'; 
  moreLinks.style.pointerEvents = 'none'; 
}