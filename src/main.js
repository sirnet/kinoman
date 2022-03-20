import SiteMenu from './view/site-menu.js';
import CardFilms from './view/card-film.js';
import SectionFilms from './view/section-film.js';
import StatsTemplate from './view/stats.js';
import MoreTamplate from './view/show-more.js';
import PopupFilm from './view/popup.js';
import TopFilms from './view/top-rated.js';
import CommentTemplated  from './view/most-commented.js';
import { cardMove }  from './mock/cadr.js';
import { render, getRandom } from './utils.js';

let FILM_COUNT = 4;
const COUNTER = 25;
const TOP_COUNT = 1;
let filmsContainerTopList;

const card = new Array(COUNTER).fill().map(cardMove);

const searchElement = () => {
  return document.querySelectorAll('.films-list__container');
};

//Точка входа DOM элемента main
const siteMain = document.querySelector('.main');
render(siteMain, new SiteMenu().getElement(), 'beforeend');

//Создание DOM элемента section films
render(siteMain, new SectionFilms().getElement(), 'beforeend');
const filmsSection = document.querySelector('.films');

//Создание DOM элемента карточек
const filmsList = document.querySelector('.films-list__container');
for (let i = 0; i <= FILM_COUNT; i++){
  render(filmsList, new CardFilms(card[i]).getElement(), 'beforeend');
}

//Создание DOM элемента кнопка загрузки дополнительных фильмов
render(filmsSection, new MoreTamplate().getElement(), 'beforeend');

//Создание DOM элемента Top Film
render(filmsSection, new TopFilms().getElement(), 'beforeend');
filmsContainerTopList = searchElement();
for (let i = 0; i <=  TOP_COUNT; i++){
  render(filmsContainerTopList[1], new CardFilms(card[i]).getElement(), 'beforeend');
}

render(filmsSection, new CommentTemplated().getElement(), 'beforeend');
filmsContainerTopList = searchElement();
for (let i = 0; i <=  TOP_COUNT; i++){
  render(filmsContainerTopList[2], new CardFilms(card[i]).getElement(), 'beforeend');
}

//Создание DOM элемента статистики пользователя
render(siteMain, new StatsTemplate().getElement(), 'beforeend');

const showMore = document.querySelector('.films-list__show-more');
showMore.addEventListener('click', function(){
  let i = FILM_COUNT;
  for (FILM_COUNT; FILM_COUNT <= i + 4; FILM_COUNT++){
    if(card.length <= FILM_COUNT){
      showMore.classList.add('visually-hidden');
      break;
    }
    render(filmsList, new CardFilms(card[FILM_COUNT]).getElement(),'beforeend');
  }
});

// CardFilms.getElement().querySelector('.film-card').addEventListener('click', () => {
//   console.log;
// });


// filmCardLink = document.querySelectorAll('.film-card');

// filmCardLink.forEach((value, index) => {
//   value.childNodes[1].addEventListener('click', () => {
//     render(siteMain, new PopupFilm(arrayMove[index]).getElement(), 'beforeend');
//   });
//   filmCardLink = document.querySelectorAll('.film-card');
// });



