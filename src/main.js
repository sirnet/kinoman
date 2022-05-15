import ProfileSite from "./view/profile.js";
import NavigationElement from "./view/navigation.js";
import MovieList from "./presenter/MovieList.js";
import Movie from "./presenter/Movie.js";
//import SortElement from "./view/sort.js";
//import Films from "./view/films.js";
//import FilmList from "./view/film-list.js";
import FilmTop from "./view/film-top.js";
import filmComment from "./view/film-comment.js";
import FilmCard from "./view/film-card.js";
//import ShowMore from "./view/show-more.js";
import StatsSection from "./view/stats.js";
import PopupSection from "./view/popup.js";
//import ListEmpty from "./view/list-empty.js";

import { cardMove } from "./mock/cadr.js";
import { render, remove, replace, RenderPosition } from "./utils/render";

const COUNT = 4;
let COUNT_CHECK = 4;
const COUNT_CLASS = 1;
const COUNT_FILMS = 21;
let card = new Array(COUNT_FILMS).fill().map(cardMove);

// const renderCard = (cardListElement, card) => {
//   const cardComponent = new FilmCard(card);
//   const popupComponent = new PopupSection(card);

//   const replaceList = () => {
//     replace(popupComponent, cardComponent);
//   };

//   const replaceListCard = () => {
//     replace(cardComponent, popupComponent);
//   };

//   cardComponent.setClickCard(() => {
//       render(sectionMainElement, popupComponent, RenderPosition.BEFOREEND);
//       document.querySelector('body').classList.add('hide-overflow');
//       document.addEventListener('keydown', onEscKeyDown);
//   });

//   popupComponent.setClickPopup(() => {
//     popupComponent.getElement().remove();
//     popupComponent.removeElement();
//     document.querySelector('body').classList.remove('hide-overflow');
//     document.addEventListener('keydown', onEscKeyDown);
//   });

//   const onEscKeyDown = (evt) => {
//     if (evt.key === 'Escape' || evt.key === 'Esc') {
//       evt.preventDefault();
//       popupComponent.getElement().remove();
//       popupComponent.removeElement();
//       document.removeEventListener('keydown', onEscKeyDown);
//       document.querySelector('body').classList.remove('hide-overflow');
//     }
//   };

//   render(cardListElement, cardComponent, RenderPosition.BEFOREEND);
// };

//const renderFilmList = (element, count) => {
   //for(let i = 0; i <= count; i++){
     //renderCard(sectionFilmContainer[element], card[i]);
   //
 //};

//Звание пользователя
const haiderElement = document.querySelector('.header');
render(haiderElement, new ProfileSite(), RenderPosition.BEFOREEND);

//Навигация и сортировка
const sectionMainElement = document.querySelector('.main');
render(sectionMainElement, new NavigationElement(), RenderPosition.BEFOREEND);
//render(sectionMainElement, new SortElement(), RenderPosition.BEFOREEND);

const moviePresenter = new MovieList(sectionMainElement);

//const sectionFilmList = filmsComponent.getElement().querySelectorAll('.films-list');
//const sectionFilmContainer = filmsComponent.getElement().querySelectorAll('.films-list__container');


// //Секция films
//const filmsComponent = new Films();
//render(sectionMainElement, filmsComponent.getElement(), RenderPosition.BEFOREEND);


//const filmListComponent = new FilmList();
//render(filmsComponent, filmListComponent, RenderPosition.BEFOREEND);
// const filmTopComponent = new FilmTop();
// render(filmsComponent, filmTopComponent, RenderPosition.BEFOREEND);
// const filmCommentComponent = new filmComment();
// render(filmsComponent, filmCommentComponent, RenderPosition.BEFOREEND);


//const sectionFilmList = filmsComponent.getElement().querySelectorAll('.films-list');
//const sectionFilmContainer = filmsComponent.getElement().querySelectorAll('.films-list__container');

//renderFilmList(0, COUNT);
//renderFilmList(1, COUNT_CLASS);
//renderFilmList(2, COUNT_CLASS);


// const showMoreComponent = new ShowMore();
// render(sectionFilmList[0], showMoreComponent.getElement(), 'beforeend');
// showMoreComponent.setClickHandler(() => {
//     for(let i = 0; i <= COUNT; i++){
//       if (COUNT_CHECK <= (card.length - 1)){
//         renderCard(sectionFilmContainer[0], card[COUNT_CHECK]);
//         COUNT_CHECK++;
//       }
//       else {
//         showMoreComponent.getElement().remove();
//         showMoreComponent.removeElement();
//        }
//      }
// });

//render(sectionMainElement, new ListEmpty(), RenderPosition.BEFOREEND);
//render(sectionMainElement, new StatsSection(), RenderPosition.BEFOREEND);
//filmsComponent.getElement().remove();
//filmsComponent.removeElement();

moviePresenter.init(card);
moviePresenter._renderMovie();
moviePresenter._renderTopFilm();
moviePresenter._renderComment();
//moviePresenter._renderMovie(card);

//const sectionFilmList = filmsComponent.getElement().querySelectorAll('.films-list');
//const sectionFilmContainer = filmsComponent.getElement().querySelectorAll('.films-list__container');

//renderFilmList(0, COUNT);
//renderFilmList(1, COUNT_CLASS);
//renderFilmList(2, COUNT_CLASS);
