console.log('it is working');

const seeAll = document.querySelector('#seeall-btn');
const p1 = document.querySelector('#box1-para');

seeAll.addEventListener('click', handleSeeall);

function handleSeeall() {
  p1.classList.remove('line-clamp-4');
  seeAll.classList.add('hidden');
}
