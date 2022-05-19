import ProfileSite from "./view/profile.js";
import NavigationElement from "./view/navigation.js";
import MovieList from "./presenter/MovieList.js";


import { cardMove } from "./mock/cadr.js";
import { render, remove, replace, RenderPosition } from "./utils/render";

const COUNT_FILMS = 21;
let card = new Array(COUNT_FILMS).fill().map(cardMove);

//Звание пользователя
const haiderElement = document.querySelector('.header');
render(haiderElement, new ProfileSite(), RenderPosition.BEFOREEND);

//Навигация и сортировка
const sectionMainElement = document.querySelector('.main');
render(sectionMainElement, new NavigationElement(), RenderPosition.BEFOREEND);
//render(sectionMainElement, new SortElement(), RenderPosition.BEFOREEND);

const moviePresenter = new MovieList(sectionMainElement);

moviePresenter.init(card);
moviePresenter._renderListMovie(0,5);
moviePresenter._renderShowMore();
moviePresenter._renderTopFilm();
moviePresenter._renderComment();
//moviePresenter._renderCard();
