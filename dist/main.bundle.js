(self["webpackChunkjavascript_group_capstone"] = self["webpackChunkjavascript_group_capstone"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

// import './style.css';

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
      <img src="${series.image.medium}" alt="${series.name}">
      <p>${series.name}</P>
      `;
    list.appendChild(episodes);
  });
};

document.addEventListener('DOMContentLoaded', showSeries);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9CQUFvQixTQUFTLFlBQVk7QUFDM0QsV0FBVyxZQUFZO0FBQ3ZCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBnZXRTZXJpZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvMS9lcGlzb2RlcycpO1xuICBjb25zdCBzZXJpZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBzZXJpZXM7XG59O1xuXG5jb25zdCBzaG93U2VyaWVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBzZXJpZXMgPSBhd2FpdCBnZXRTZXJpZXMoKTtcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gIHNlcmllcy5mb3JFYWNoKChzZXJpZXMpID0+IHtcbiAgICBjb25zdCBlcGlzb2RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVwaXNvZGVzLmNsYXNzTGlzdC5hZGQoJ3NlcmllJyk7XG4gICAgZXBpc29kZXMuaW5uZXJIVE1MID0gYFxuICAgICAgPGltZyBzcmM9XCIke3Nlcmllcy5pbWFnZS5tZWRpdW19XCIgYWx0PVwiJHtzZXJpZXMubmFtZX1cIj5cbiAgICAgIDxwPiR7c2VyaWVzLm5hbWV9PC9QPlxuICAgICAgYDtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGVwaXNvZGVzKTtcbiAgfSk7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgc2hvd1Nlcmllcyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=