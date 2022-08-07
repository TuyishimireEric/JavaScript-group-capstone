import postComment from './addcomment.js';
import fetchComments from './fetchComments.js';

const modalContent = document.querySelector('.content');

const getSeries = async () => {
  const response = await fetch('https://api.tvmaze.com/shows/1/episodes');
  const series = await response.json();
  return series;
};

const showSeries = async () => {
  const series = await getSeries();
  const totalmovies = document.querySelector('.title');
  totalmovies.insertAdjacentHTML('beforeend', `(${series.length})`);
  const list = document.querySelector('.main');
  series.forEach((series) => {
    const episodes = document.createElement('div');
    episodes.classList.add('serie');
    episodes.innerHTML = `
        <img class="pic" src="${series.image.medium}" alt="${series.name}">
        <div class="name"><p class="serie-name">${series.name}</p> 
            <p> <span id="${series.id}" class="likes">0</span><i id="${series.id}" class="fa fa-heart"></i></p>
        </div>
        <button type="submit" class="comment" id="${series.id}">Comment</button>
        `;
    list.appendChild(episodes);
  });
};

document.addEventListener('DOMContentLoaded', showSeries);

const fetchData = (id) => {
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
                      <p class="comment-title">Comments <span class="count-commments"></span></p>
                      <span class="close">&times;</span>
                    </div>
                    <ul class="comments-container">
                    </ul>
                    <form class="form-group form-control p-4 comment-form">
                      <input type="text" placeholder="Your name" class="form-group form-control" id="name">
                      <textarea class="form-control form-group" placeholder="Your Comment" style="height: 120px;" id="added-comment"></textarea>
                      <button type="button" class="add-comment" id=${id}>Comment</button>
                    </form>
                  </div>
                </div>
              </div>`;
        fetchComments(id);
        const submitButton = document.querySelector('.add-comment');
        submitButton.addEventListener('click', postComment);
      }
    });
  });
};

export { fetchData, getSeries };