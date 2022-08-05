import './style.css';
import { fetchData } from './modules/fetchseries.js';
import addLikes from './modules/likes.js';

const all = document.querySelector('body');
const modal = document.getElementById('myModal');

all.addEventListener('click', (e) => {
  if (e.target.className === 'comment') {
    modal.style.display = 'block';
    fetchData(e.target.id);
  }
  if (e.target.className === 'close') {
    modal.style.display = 'none';
  }
  if (e.target === modal) {
    modal.style.display = 'none';
  }
  if (e.target.className === 'fa fa-heart') {
    addLikes(e.target.id);
  }
});
