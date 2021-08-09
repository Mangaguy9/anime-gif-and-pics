const url = 'https://api.waifu.pics/';
const wrap = document.querySelector('.wrap');
const a = document.querySelector('a');

a.addEventListener('click', () => {
  localStorage.removeItem(1);
});

window.addEventListener('load', () => {
  getit('waifu');
});

const getit = (type, category) => {
  wrap.innerHTML = '';
  if (category) {
    for (i = 0; i < 20; i++) {
      fetch(url + type + '/' + category)
        .then((res) => res.json())
        .then((pic) => show(pic.url));
      localStorage.setItem(1, type);
      localStorage.setItem(2, category);
    }
  } else {
    for (i = 0; i < 20; i++) {
      fetch(url + localStorage.getItem(1) + '/' + localStorage.getItem(2))
        .then((res) => res.json())
        .then((pic) => show(pic.url));
    }
  }
};

const show = (pic) => {
  const imageEl = document.createElement('img');
  imageEl.src = pic;
  wrap.appendChild(imageEl);
};

// setInterval(() => {
//   console.clear();
// }, 3000);
