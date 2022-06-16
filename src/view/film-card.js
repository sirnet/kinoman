import AbstractView from "../utils/abstract";

const createFilmCard = (array) => {
  const {title, poster, description, } = array;
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

export default class FilmCard extends AbstractView {
  constructor (card) {
    super();
    this._card = card;

    this._clickCard = this._clickCard.bind(this);
    this._clickWatchList =  this._clickWatchList.bind(this);
  }

  getTemplate () {
    return createFilmCard(this._card);
  }

  _clickCard (evt){
    evt.preventDefault();
    this._callback.click();
  }

  _clickWatchList (evt){
    evt.preventDefault();
    this._watchist.click();
  }

  setClickCard(callback){
    this._callback.click = callback;
    this.getElement().querySelector('.film-card__poster').addEventListener('click', this._clickCard);
    this.getElement().querySelector('.film-card__title').addEventListener('click', this._clickCard);
    this.getElement().querySelector('.film-card__comments').addEventListener('click', this._clickCard);
  }

  setClickAddToWatchlist(callback){
    this._watchist.click = callback;
    this.getElement().querySelector('.film-card__controls-item--add-to-watchlist').addEventListener('click', this._clickWatchList);
  }

}
