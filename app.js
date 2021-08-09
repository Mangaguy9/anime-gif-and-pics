const url = 'https://api.waifu.pics/';
const wrap = document.querySelector('.wrap');
const a = document.querySelector('a');

a.addEventListener('click', () => {
  sessionStorage.setItem(1, a.innerHTML.toLowerCase());
});

window.addEventListener('load', () => {
  if (sessionStorage.getItem(1)) {
    getit(sessionStorage.getItem(1), 'waifu');
  } else {
    getit('sfw', 'waifu');
  }
});

const getit = (type, category) => {
  wrap.innerHTML = '';
  if (category) {
    for (i = 0; i < 20; i++) {
      fetch(url + type + '/' + category)
        .then((res) => res.json())
        .then((pic) => show(pic.url));
      sessionStorage.setItem(1, type);
      sessionStorage.setItem(2, category);
    }
  } else {
    for (i = 0; i < 20; i++) {
      fetch(url + sessionStorage.getItem(1) + '/' + sessionStorage.getItem(2))
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
