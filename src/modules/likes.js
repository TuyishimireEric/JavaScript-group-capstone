import { getSeries } from './fetchseries.js';

const newLike = async (id) => {
  const data = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TDTG3sxn7jY0mfJHgG9a/likes', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });
  return data;
};

const getData = async (call) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TDTG3sxn7jY0mfJHgG9a/likes';
  const data = await fetch(url);
  const content = await data.json();
  call(content);
};

const addLikes = (id) => {
  getSeries().then((data) => {
    data.forEach((series) => {
      if (series.id.toString() === id.toString()) {
        newLike(id).then(() => {
          getData((data) => {
            data.forEach((e) => {
              if (e.item_id.toString() === id.toString()) {
                const element = document.getElementById(id.toString());
                element.parentElement.textContent = e.likes;
              }
            });
          });
        });
      }
    });
  });
};

window.addEventListener('load', () => {
  getData((data) => {
    data.forEach((element) => {
      const likesCount = document.querySelectorAll('.likes');
      likesCount.forEach((e) => {
        if (e.id.toString() === element.item_id.toString()) {
          e.textContent = element.likes;
        }
      });
    });
  });
});

export default addLikes;