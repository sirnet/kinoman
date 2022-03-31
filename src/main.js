import ProfileSite from "./view/profile.js";
import NavigationElement from "./view/navigation.js";
import SortElement from "./view/sort.js";
import Films from "./view/films.js";
import FilmList from "./view/film-list.js";
import FilmCard from "./view/film-card.js";
import ShowMore from "./view/show-more.js";
import StatsSection from "./view/stats.js";
import PopupSection from "./view/popup.js";
import { cardMove } from "./mock/cadr.js";
import { render, RenderPosition } from "./utils.js";

const COUNT = 4;
let COUNT_CHECK = 4;
const COUNT_CLASS = 2;
const COUNT_FILMS = 21;
let card = new Array(COUNT_FILMS).fill().map(cardMove);

//Звание пользователя
const haiderElement = document.querySelector('.header');
render(haiderElement, new ProfileSite().getElement(), RenderPosition.BEFOREEND);

//Навигация и сортировка
const sectionMainElement = document.querySelector('.main');
render(sectionMainElement, new NavigationElement().getElement(), RenderPosition.BEFOREEND);
render(sectionMainElement, new SortElement().getElement(), RenderPosition.BEFOREEND);

// //Секция films
const filmsComponent = new Films();
render(sectionMainElement, new Films().getElement(), RenderPosition.BEFOREEND);
const sectironFilms = document.querySelector('.films');
console.log(filmsComponent.getElement());
for (let i = 0; i <= COUNT_CLASS; i++){
  render(filmsComponent.getElement(), new FilmList().getElement(), RenderPosition.BEFOREEND);
}
console.log(filmsComponent.getElement());
const sectionFilm = document.querySelectorAll('.films-list');
for (let i = 1; i<= COUNT_CLASS; i++) {
  sectionFilm[i].classList.add('films-list--extra');
}
sectionFilm[0].querySelector('.films-list__title').innerHTML = 'All movies. Upcoming';
sectionFilm[0].querySelector('.films-list__title').classList.add('visually-hidden');
sectionFilm[1].querySelector('.films-list__title').innerHTML = 'Top rated';
sectionFilm[2].querySelector('.films-list__title').innerHTML = 'Most commented';

const sectionFilmContainer = document.querySelectorAll('.films-list__container');
for(let i = 0; i <= COUNT; i++){
   render(sectionFilmContainer[0], new FilmCard(card[i]).getElement(), RenderPosition.BEFOREEND);
}

for(let i = 1; i <= COUNT_CLASS; i++){
  for(let j = 1; j <= COUNT_CLASS; j++) {
     render(sectionFilmContainer[i], new FilmCard(card[i]).getElement(), RenderPosition.BEFOREEND);
  }
}

render(sectionFilm[0], new ShowMore().getElement(), 'beforeend');
const btnShowMore = sectironFilms.querySelector('.films-list__show-more');
let FilmCardElement = [];
for(let i = 0; i <= COUNT; i++){
  FilmCardElement.push(new FilmCard(card[i]).getElement());
}
console.log(FilmCardElement);
btnShowMore.addEventListener('click', () => {
     for(let i = 0; i <= COUNT; i++){
        if (COUNT_CHECK <= (card.length - 1)){
         render(sectionFilmContainer[0], FilmCardElement[i], RenderPosition.BEFOREEND);
         COUNT_CHECK++;
       }
       else {
         btnShowMore.classList.add('visually-hidden');
       }
     }
});

render(sectionMainElement, new StatsSection().getElement(), RenderPosition.BEFOREEND);
//render(sectionMainElement, new PopupSection().getElement(), RenderPosition.BEFOREEND);
