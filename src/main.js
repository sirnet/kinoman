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

const renderCard = (cardListElement, card) => {
  const cardComponent = new FilmCard(card);
  const popupComponent = new PopupSection(card);

  cardComponent.getElement().querySelector('.film-card__link').addEventListener('click', () => {
      render(sectionMainElement, popupComponent.getElement(), RenderPosition.BEFOREEND);
      document.querySelector('body').classList.add('hide-overflow');
  });

  popupComponent.getElement().querySelector('.film-details__close-btn').addEventListener('click', () => {
    popupComponent.getElement().remove();
    popupComponent.removeElement();
    document.querySelector('body').classList.remove('hide-overflow');
  });

  render(cardListElement, cardComponent.getElement(), RenderPosition.BEFOREEND);
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
for (let i = 0; i <= COUNT_CLASS; i++){
  render(filmsComponent.getElement(), filmListComponent.getElement(), RenderPosition.BEFOREEND);
  filmListComponent.removeElement();
}

const sectionFilmList = filmsComponent.getElement().querySelectorAll('.films-list');
for (let i = 1; i<= COUNT_CLASS; i++) {
  sectionFilmList[i].classList.add('films-list--extra');
}
sectionFilmList[0].querySelector('.films-list__title').innerHTML = 'All movies. Upcoming';
sectionFilmList[0].querySelector('.films-list__title').classList.add('visually-hidden');
sectionFilmList[1].querySelector('.films-list__title').innerHTML = 'Top rated';
sectionFilmList[2].querySelector('.films-list__title').innerHTML = 'Most commented';

const sectionFilmContainer = filmsComponent.getElement().querySelectorAll('.films-list__container');
for(let i = 0; i <= COUNT; i++){
  renderCard(sectionFilmContainer[0], card[i]);
}

for(let i = 1; i <= COUNT_CLASS; i++){
  for(let j = 1; j <= COUNT_CLASS; j++) {
     renderCard(sectionFilmContainer[i], card[j]);
  }
}

const showMoreComponent = new ShowMore();
render(sectionFilmList[0], showMoreComponent.getElement(), 'beforeend');

filmsComponent.getElement().querySelector('.films-list__show-more').addEventListener('click', () => {
    for(let i = 0; i <= COUNT; i++){
      if (COUNT_CHECK <= (card.length - 1)){
        renderCard(sectionFilmContainer[0], card[i]);
        COUNT_CHECK++;
      }
      else {
        showMoreComponent.getElement().remove();
        showMoreComponent.removeElement();
       }
     }
});

render(sectionMainElement, new StatsSection().getElement(), RenderPosition.BEFOREEND);
//render(sectionMainElement, new PopupSection().getElement(), RenderPosition.BEFOREEND);
