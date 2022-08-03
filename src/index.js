import './style.css';

const getSeries = async () => {
  const response = await fetch('https://api.tvmaze.com/shows/1/episodes');
  const series = await response.json();
  return series;
};
let popup = document.getElementById("popup");

function openpopup(){
    popup.classList.add("open-popup")
}

function closepopup(){
    popup.classList.remove("open-popup")
}

const showSeries = async () => {
  const series = await getSeries();
  const list = document.querySelector('.main');
  series.forEach((series) => {
    const episodes = document.createElement('div');
    episodes.classList.add('serie');
    episodes.innerHTML = `
      <img class="pic" src="${series.image.medium}" alt="${series.name}">
      <p class="name">${series.name}  <i class="fa fa-heart"></i></P>
      <button type="submit" class="comment" onclick="openpopup()">Comment</button>

      <div class="popup" id="popup">
      <div class="modal-header">
        <img src="${series.image.medium}" alt="${series.name}" class="modal-img">
        <button type="button" class="close" onclick="closepopup()" aria-label="Close"><span aria-hidden="true">×</span>
      </button>
      </div>
      <div class="modal-body">
      <h3 class="text-center">Thor: Love and Thunder</h3>
        <div class="text-center">
          <p>After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.</p>
        </div>
        <ul class="comments-container"></ul>
        <p class="comments-counter" id="616037">0 comments</p>
        <form class="form-group form-control p-4 comment-form">
          <input type="text" placeholder="Your name" class="form-group form-control" id="name">
          <textarea class="form-control form-group" placeholder="Your Comment" style="height: 120px;" id="added-comment"></textarea>
          <button type="button" class="comment" id="616037">Comment</button>
        </form>
      </div>
    </div>
      `;
    list.appendChild(episodes);
  });
};

document.addEventListener('DOMContentLoaded', showSeries);

