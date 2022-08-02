import './style.css';

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
      <button type="submit" class="comment">Comment</button>
      `;
    list.appendChild(episodes);
  });
};

document.addEventListener('DOMContentLoaded', showSeries);
