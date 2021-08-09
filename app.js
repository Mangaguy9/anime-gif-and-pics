const url = 'https://api.waifu.pics/';
const wrap = document.querySelector('.wrap');
const a = document.querySelector('a');
const select = document.querySelector('select');

a.addEventListener('click', () => {
  sessionStorage.setItem(1, a.innerHTML.toLowerCase());
});

window.addEventListener('load', () => {
  getit(a.innerHTML.toLowerCase() === 'nsfw' ? 'sfw' : 'nsfw', 'waifu');
});

const okay = (type) => {
  const index = select.selectedIndex;
  const category = select[index].value;
  console.log(category);
  getit(type, category);
};

const getit = (type, category) => {
  wrap.innerHTML = '';
  console.log(url + type + '/' + category);
  for (i = 0; i < 20; i++) {
    fetch(url + type + '/' + category)
      .then((res) => res.json())
      .then((pic) => show(pic.url))
      .then((err) => console.warn(err));
    sessionStorage.setItem(1, type);
    sessionStorage.setItem(2, category);
  }
};

const show = (pic) => {
  const imageEl = document.createElement('img');
  imageEl.src = pic;
  wrap.appendChild(imageEl);
};

setInterval(() => {
  console.clear();
}, 1000);
