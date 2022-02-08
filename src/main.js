import { createSiteMenuTemplate } from './view/site-menu.js';
import { creatSectionFilms, creatCardFilm } from './view/card-film.js';
import { createStatsTemplate } from './view/stats.js';
import { createShowMoreTemplate } from './view/show-more.js';
import { createPopupTemlate } from './view/popup.js';
import { createSectionTopFilms } from './view/top-rated.js';
import { createMostCommentTemplated } from './view/most-commented.js';
import {arrayMove} from './mock/cadr.js';

const FILM_COUNT = 4;
const TOP_COUNT = 1;
let filmsContainerTopList;
const POSITION = 'beforeend';

const searchElement = () => {
  return document.querySelectorAll('.films-list__container');
};

//Функция создания DOM элементов
const render = (container, template) => {
  container.insertAdjacentHTML(POSITION, template);
};

//Точка входа DOM элемента main
const siteMain = document.querySelector('.main');
render(siteMain, createSiteMenuTemplate());


//Создание DOM элемента section films
render(siteMain, creatSectionFilms());
const filmsSection = document.querySelector('.films');

//Создание DOM элемента карточек
const filmsList = document.querySelector('.films-list__container');
for (let i = 0; i <= FILM_COUNT; i++){
  render(filmsList, creatCardFilm(arrayMove[i]));
}

//Создание DOM элемента кнопка загрузки дополнительных фильмов
render(filmsSection, createShowMoreTemplate());

//Создание DOM элемента Top Film
render(filmsSection, createSectionTopFilms());
filmsContainerTopList = searchElement();
for (let i = 0; i <=  TOP_COUNT; i++){
  render(filmsContainerTopList[1], creatCardFilm());
}

render(filmsSection, createMostCommentTemplated());
filmsContainerTopList = searchElement();
for (let i = 0; i <=  TOP_COUNT; i++){
  render(filmsContainerTopList[2], creatCardFilm());
}

//Создание DOM элемента статистики пользователя
render(siteMain, createStatsTemplate());

