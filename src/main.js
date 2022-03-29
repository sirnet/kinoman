import { createProfileTemplate } from "./view/profile.js";
import { createNavigationTemplate } from "./view/navigation.js";
import { createSortTemplate } from "./view/sort.js";
import { createFilmsTemplate } from "./view/films.js";
import { createFilmList } from "./view/film-list.js";
import { createFilmCard } from "./view/film-card.js";
import { createShowMore } from "./view/show-more.js";
import { cardMove } from "./mock/cadr.js";
import { render } from "./utils.js";

const COUNT = 4;
const COUNT_CLASS = 2;
const FILMS_COUNT = 20;
let card = new Array(FILMS_COUNT).fill().map(cardMove);

//Звание пользователя
const haiderElement = document.querySelector('.header');
render(haiderElement, createProfileTemplate(), 'beforeend');

//Навигация и сортировка
const sectionMainElement = document.querySelector('.main');
render(sectionMainElement, createNavigationTemplate(), 'beforeend');
render(sectionMainElement, createSortTemplate(), 'beforeend');
//Секция films
render(sectionMainElement, createFilmsTemplate(), 'beforeend');
const sectironFilms = document.querySelector('.films');

render(sectironFilms, createFilmList(), 'beforeend');
render(sectironFilms, createFilmList(), 'beforeend');
render(sectironFilms, createFilmList(), 'beforeend');

const sectionFilm = document.querySelectorAll('.films-list');
for (let i = 1; i<= COUNT_CLASS; i++) {
  sectionFilm[i].classList.add('films-list--extra');
}
sectionFilm[0].querySelector('.films-list__title').innerHTML = 'All movies. Upcoming';
sectionFilm[1].querySelector('.films-list__title').innerHTML = 'Top rated';
sectionFilm[2].querySelector('.films-list__title').innerHTML = 'Most commented';

const sectionFilmContainer = document.querySelectorAll('.films-list__container');
for(let i = 0; i <= COUNT; i++){
  console.log(card[i]);
  render(sectionFilmContainer[0], createFilmCard(card[i]), 'beforeend');
}

for(let i = 1; i <= COUNT_CLASS; i++){
  for(let j = 1; j <= COUNT_CLASS; j++) {
    render(sectionFilmContainer[i], createFilmCard(card[j]), 'beforeend');
  }

}

render(sectionFilm[0], createShowMore(), 'beforeend');
