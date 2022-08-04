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

const getData = async (collaback) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TDTG3sxn7jY0mfJHgG9a/likes';
  const data = await fetch(url);
  const content = await data.json();
  collaback(content);
};

const addLikes = (id) => {
  getSeries().then((data) => {
    data.forEach((series) => {
      if (series.id.toString() === id.toString()) {
        newLike(id).then((data) => {
          if (data.status === 201) {
            getData((data) => {
              data.forEach((val) => {
                if (val.item_id.toString() === id.toString()) {
                  const elem = document.getElementById(id.toString());
                  elem.parentElement.lastElementChild.firstElementChild.textContent = val.likes;
                }
              });
            });
          }
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