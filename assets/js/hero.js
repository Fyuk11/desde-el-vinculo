export function initHeroDropdown() {
  const holisticWrapper = document.querySelector('.btn-holistic-wrapper');
  if (!holisticWrapper) return;

  const btn = holisticWrapper.querySelector('.btn-holistic');
  btn.addEventListener('click', () => {
    holisticWrapper.classList.toggle('expanded');
  });
}
