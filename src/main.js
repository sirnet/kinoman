import ProfileSite from "./view/profile.js";
import NavigationElement from "./view/navigation.js";
import SortElement from "./view/sort.js";
import Films from "./view/films.js";
import FilmList from "./view/film-list.js";
import FilmTop from "./view/film-top.js";
import filmComment from "./view/film-comment.js";
import FilmCard from "./view/film-card.js";
import ShowMore from "./view/show-more.js";
import StatsSection from "./view/stats.js";
import PopupSection from "./view/popup.js";
import ListEmpty from "./view/list-empty.js";

import { cardMove } from "./mock/cadr.js";
import { render, RenderPosition } from "./utils/utils.js";

const COUNT = 4;
let COUNT_CHECK = 4;
const COUNT_CLASS = 1;
const COUNT_FILMS = 21;
let card = new Array(COUNT_FILMS).fill().map(cardMove);

const renderCard = (cardListElement, card) => {
  const cardComponent = new FilmCard(card);
  const popupComponent = new PopupSection(card);

  cardComponent.getElement().querySelector('.film-card__link').addEventListener('click', () => {
      render(sectionMainElement, popupComponent.getElement(), RenderPosition.BEFOREEND);
      document.querySelector('body').classList.add('hide-overflow');
      document.addEventListener('keydown', onEscKeyDown);
  });

  popupComponent.getElement().querySelector('.film-details__close-btn').addEventListener('click', () => {
    popupComponent.getElement().remove();
    popupComponent.removeElement();
    document.querySelector('body').classList.remove('hide-overflow');
    document.addEventListener('keydown', onEscKeyDown);
  });

  const onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      popupComponent.getElement().remove();
      popupComponent.removeElement();
      document.removeEventListener('keydown', onEscKeyDown);
      document.querySelector('body').classList.remove('hide-overflow');
    }
  };

  render(cardListElement, cardComponent.getElement(), RenderPosition.BEFOREEND);
};

const renderFilmList = (element, count) => {
  for(let i = 0; i <= count; i++){
    renderCard(sectionFilmContainer[element], card[i]);
  }
};

//Звание пользователя
const haiderElement = document.querySelector('.header');
render(haiderElement, new ProfileSite().getElement(), RenderPosition.BEFOREEND);

//Навигация и сортировка
const sectionMainElement = document.querySelector('.main');
render(sectionMainElement, new NavigationElement().getElement(), RenderPosition.BEFOREEND);
render(sectionMainElement, new SortElement().getElement(), RenderPosition.BEFOREEND);

// //Секция films
const filmsComponent = new Films();
render(sectionMainElement, filmsComponent.getElement(), RenderPosition.BEFOREEND);


const filmListComponent = new FilmList();
render(filmsComponent.getElement(), filmListComponent.getElement(), RenderPosition.BEFOREEND);
const filmTopComponent = new FilmTop();
render(filmsComponent.getElement(), filmTopComponent.getElement(), RenderPosition.BEFOREEND);
const filmCommentComponent = new filmComment();
render(filmsComponent.getElement(), filmCommentComponent.getElement(), RenderPosition.BEFOREEND);


const sectionFilmList = filmsComponent.getElement().querySelectorAll('.films-list');
const sectionFilmContainer = filmsComponent.getElement().querySelectorAll('.films-list__container');

renderFilmList(0, COUNT);
renderFilmList(1, COUNT_CLASS);
renderFilmList(2, COUNT_CLASS);


const showMoreComponent = new ShowMore();
render(sectionFilmList[0], showMoreComponent.getElement(), 'beforeend');
filmsComponent.getElement().querySelector('.films-list__show-more').addEventListener('click', () => {
    for(let i = 0; i <= COUNT; i++){
      if (COUNT_CHECK <= (card.length - 1)){
        renderCard(sectionFilmContainer[0], card[COUNT_CHECK]);
        COUNT_CHECK++;
      }
      else {
        showMoreComponent.getElement().remove();
        showMoreComponent.removeElement();
       }
     }
});

render(sectionMainElement, new ListEmpty().getElement(), RenderPosition.BEFOREEND);
render(sectionMainElement, new StatsSection().getElement(), RenderPosition.BEFOREEND);
//filmsComponent.getElement().remove();
//filmsComponent.removeElement();


