import { createElement } from '../utils.js';

const createListEmpty = () => {
  return `<section class="films-list">
  <h2 class="films-list__title">There are no movies in our database</h2>

  <!--
    Значение отображаемого текста зависит от выбранного фильтра:
      * All movies – 'There are no movies in our database'
      * Watchlist — 'There are no movies to watch now';
      * History — 'There are no watched movies now';
      * Favorites — 'There are no favorite movies now'.
  -->
  </section>`;
}

export default class ListEmpty {
  constructor () {
    this._element = null;
  }

  getTemplate () {
    return createListEmpty();
  }

  getElement () {
    if(!this._element){
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement () {
    this._element = null;
  }
}
