import { createElement } from "../utils";

const creatCardFilm = (cardData) => {

  const { title , description, poster } = cardData;

  return `<article class="film-card">
  <a class="film-card__link">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">8.3</p>
    <p class="film-card__info">
      <span class="film-card__year">1929</span>
      <span class="film-card__duration">1h 55m</span>
      <span class="film-card__genre">Musical</span>
    </p>
    <img src="./images/posters/${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <span class="film-card__comments">5 comments</span>
  </a>
  <div class="film-card__controls">
    <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
</article>`;
};

export const creatSectionFilms = () => {
  return `<section class="films">
  <section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container">
    </div>
  </section>
  </section>`;
};

export class CardFilms {
  constructor (card) {
    this._card = card;
    this._element = null;
  }

  getTemplate() {
    return creatCardFilm(this._card);
  }

  getElement() {
    if(!this._element) {
      return createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement(){
    this._element = null;
  }
}

export class SectionFilms {
  constructor (){
    this._element = null;
  }

  getTemplate(){
    return creatSectionFilms();
  }

  getElement() {
    if(!this._element) {
      return createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement(){
    this._element = null;
  }
}
