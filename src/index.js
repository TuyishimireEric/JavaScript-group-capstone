import './style.css';
import postComment from './addComment.js';
import fetchComments from './fetchComments.js';


const body = document.querySelector('body');
const modalContent = document.querySelector('.content');
const modal = document.getElementById('myModal');

const getSeries = async () => {
  const response = await fetch('https://api.tvmaze.com/shows/1/episodes');
  const series = await response.json();
  return series;
};

const showSeries = async () => {
  const series = await getSeries();
  const list = document.querySelector('.main');
  series.forEach((series) => {
    const episodes = document.createElement('div');
    episodes.classList.add('serie');
    episodes.innerHTML = `
      <img class="pic" src="${series.image.medium}" alt="${series.name}">
      <p class="name">${series.name}  <i class="fa fa-heart"></i></P>
      <button type="submit" class="comment" id="${series.id}">Comment</button>
      `;
    list.appendChild(episodes);
  });
};

document.addEventListener('DOMContentLoaded', showSeries);

const getDataFromApi = (id) => {
  // getCommentItems(id);
  getSeries().then((data) => {
    data.forEach((series) => {
      if (series.id.toString() === id.toString()) {
        modalContent.innerHTML = `
            <div class="modalContent">
                <div class="part1">
                    <img class="original" src="${series.image.original}" alt="">
                    <div class="text">
                      <h1 class="text-title">${series.name}</h1>
                      <p class="language">${series.summary}</p>
                    </div>
                </div>
                <div class="part2">
                  <div class="comment-top">
                    <p class="comment-title">Comments</p>
                    <span class="close">&times;</span>
                  </div>
                  <ul class="comments-container">
                  </ul>
                  <form class="form-group form-control p-4 comment-form">
                    <input type="text" placeholder="Your name" class="form-group form-control" id="name">
                    <textarea class="form-control form-group" placeholder="Your Comment" style="height: 120px;" id="added-comment"></textarea>
                    <button type="button" class="add-comment btn btn-info" id=${id}>Comment</button>
                  </form>
                </div>
              </div>
            </div>`;
            const submitButton = document.querySelector('.add-comment');
            submitButton.addEventListener('click', postComment);
      }
    });
  });
};

body.addEventListener('click', (e) => {
  if (e.target.className === 'comment') {
    modal.style.display = 'block';
    getDataFromApi(e.target.id);
  }
  if (e.target.className === 'close') {
    modal.style.display = 'none';
  }
  if (e.target === modal) {
    modal.style.display = 'none';
  }
  // if (e.target.className === 'far fa-heart likes') {
  //   addLikes(e.target.id);
  // }
  //if (e.target.className === 'comment') {
     //const value = { name: document.querySelector('#name').value, text: document.querySelector('#commentText').value, id: document.querySelector('#id').value };
     //postItem(value);
   //}
});

export default index;