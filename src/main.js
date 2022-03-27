import { createProfileTemplate } from "./view/profile.js";
import { createNavigationTemplate } from "./view/navigation.js";
import { createSortTemplate } from "./view/sort.js";
import { createFilmsTemplate } from "./view/films.js";
import { createFilmCard } from "./view/film-card.js";
import { createShowMore } from "./view/show-more.js";
import { cardMove } from "./mock/cadr.js";
import { render } from "./utils.js";

const COUNT = 4;
const FILMS_COUNT = 20;
let card = new Array(FILMS_COUNT).fill().map(cardMove);

//Звание пользователя
const haiderElement = document.querySelector('.header');
render(haiderElement, createProfileTemplate(), 'beforeend');

//Навигация и сортировка
const sectionMainElement = document.querySelector('.main');
render(sectionMainElement, createNavigationTemplate(), 'beforeend');
render(sectionMainElement, createSortTemplate(), 'beforeend');

render(sectionMainElement, createFilmsTemplate(), 'beforeend');

const sectionFilm = document.querySelector('.films-list');
const sectionFilmContainer = sectionFilm.querySelector('.films-list__container');

for(let i = 0; i <= COUNT; i++){
  render(sectionFilmContainer, createFilmCard(card[i]), 'beforeend');
}

render(sectionFilm, createShowMore(), 'beforeend');
