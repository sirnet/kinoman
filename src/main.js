import { createSiteMenuTemplate } from './view/site-menu.js';
import { creatSectionFilms, CardFilms } from './view/card-film.js';
import { createStatsTemplate } from './view/stats.js';
import { createShowMoreTemplate } from './view/show-more.js';
import { PopupFilm } from './view/popup.js';
import { createSectionTopFilms } from './view/top-rated.js';
import { createMostCommentTemplated } from './view/most-commented.js';
import { arrayMove } from './mock/cadr.js';
import { render, getRandom } from './utils.js';


let FILM_COUNT = 4;
const TOP_COUNT = 1;
let filmsContainerTopList;
let filmCardLink;

const searchElement = () => {
  return document.querySelectorAll('.films-list__container');
};

//Точка входа DOM элемента main
let siteMain = document.querySelector('.main');
render(siteMain, createSiteMenuTemplate());


//Создание DOM элемента section films
render(siteMain, creatSectionFilms());
const filmsSection = document.querySelector('.films');

//Создание DOM элемента карточек
const filmsList = document.querySelector('.films-list__container');
for (let i = 0; i <= FILM_COUNT; i++){
  render(filmsList, new CardFilms(arrayMove[i]).getTemplate());
}

//Создание DOM элемента кнопка загрузки дополнительных фильмов
render(filmsSection, createShowMoreTemplate());

//Создание DOM элемента Top Film
render(filmsSection, createSectionTopFilms());
filmsContainerTopList = searchElement();
for (let i = 0; i <=  TOP_COUNT; i++){
  render(filmsContainerTopList[1], new CardFilms(arrayMove[i]).getTemplate());
}

render(filmsSection, createMostCommentTemplated());
filmsContainerTopList = searchElement();
for (let i = 0; i <=  TOP_COUNT; i++){
  render(filmsContainerTopList[2], new CardFilms(arrayMove[i]).getTemplate());
}

//Создание DOM элемента статистики пользователя
render(siteMain, createStatsTemplate());

//render(siteMain, createPopupTemlate(arrayMove[0]));
const showMore = document.querySelector('.films-list__show-more');

showMore.addEventListener('click', function(){
  let i = FILM_COUNT;

  for (FILM_COUNT; FILM_COUNT <= i + 4; FILM_COUNT++){
    if(arrayMove.length <= FILM_COUNT){
      showMore.classList.add('visually-hidden');
      break;
    }
    render(filmsList, new CardFilms(arrayMove[FILM_COUNT]).getTemplate());
  }
  filmCardLink = document.querySelectorAll('.film-card');
});

filmCardLink = document.querySelectorAll('.film-card');

filmCardLink.forEach((value, index) => {
  value.childNodes[1].addEventListener('click', () => {
    render(siteMain, new PopupFilm(arrayMove[index]).getPopup());
  });
  filmCardLink = document.querySelectorAll('.film-card');
  siteMain = document.querySelector('.main');
});

siteMain.addEventListener('click', () => {
  if(siteMain.querySelector('.film-details')){
    document.querySelector('.film-details__close').querySelector('click', () => {
      siteMain.querySelector('.film-details').remove();
    });
  }
});


//render(siteMain, createPopupTemlate(arrayMove[getRandom(0, arrayMove.length-1)]));

