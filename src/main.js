import  SiteMenu from './view/site-menu.js';
import { SectionFilms, CardFilms } from './view/card-film.js';
import StatsTemplate from './view/stats.js';
import MoreTamplate from './view/show-more.js';
import PopupFilm from './view/popup.js';
import TopFilms from './view/top-rated.js';
import CommentTemplated  from './view/most-commented.js';
import { arrayMove }  from './mock/cadr.js';
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
render(siteMain, new SiteMenu().getElement());

//Создание DOM элемента section films
render(siteMain, new SectionFilms().getElement());
const filmsSection = document.querySelector('.films');

//Создание DOM элемента карточек
const filmsList = document.querySelector('.films-list__container');
for (let i = 0; i <= FILM_COUNT; i++){
  render(filmsList, new CardFilms(arrayMove[i]).getElement());
}

//Создание DOM элемента кнопка загрузки дополнительных фильмов
render(filmsSection, new MoreTamplate().getElement());

//Создание DOM элемента Top Film
render(filmsSection, new TopFilms().getElement());
filmsContainerTopList = searchElement();
for (let i = 0; i <=  TOP_COUNT; i++){
  render(filmsContainerTopList[1], new CardFilms(arrayMove[i]).getElement());
}

render(filmsSection, new CommentTemplated().getElement());
filmsContainerTopList = searchElement();
for (let i = 0; i <=  TOP_COUNT; i++){
  render(filmsContainerTopList[2], new CardFilms(arrayMove[i]).getElement());
}

//Создание DOM элемента статистики пользователя
render(siteMain, new StatsTemplate().getElement());

//render(siteMain, createPopupTemlate(arrayMove[0]));
const showMore = document.querySelector('.films-list__show-more');

showMore.addEventListener('click', function(){
  let i = FILM_COUNT;
  for (FILM_COUNT; FILM_COUNT <= i + 4; FILM_COUNT++){
    if(arrayMove.length <= FILM_COUNT){
      showMore.classList.add('visually-hidden');
      break;
    }
    render(filmsList, new CardFilms(arrayMove[FILM_COUNT]).getElement());
  }
});

filmCardLink = document.querySelectorAll('.film-card');

filmCardLink.forEach((value, index) => {
  value.childNodes[1].addEventListener('click', () => {
    render(siteMain, new PopupFilm(arrayMove[index]).getElement());
  });
  filmCardLink = document.querySelectorAll('.film-card');
  siteMain = document.querySelector('.main');
});

const popupFilm = new PopupFilm();


popupFilm.getElement().querySelector('.film-card').addEventListener('click', () => {
  console.log(1);
});


