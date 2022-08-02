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
    episodes.classList.add('box');
    episodes.innerHTML = `
      <img src="${series.image.original}">
      `;
    list.appendChild(episodes);
  });
};

export { getSeries, showSeries };

//  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
