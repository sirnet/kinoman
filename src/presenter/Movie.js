import FilmTop from "../view/film-top.js";
import filmComment from "../view/film-comment.js";
import FilmCard from "../view/film-card.js";
import PopupSection from "../view/popup.js";
import { render, remove, replace, RenderPosition } from "../utils/render";

export default class Movie {
  constructor (filmComponent) {
    this._filmComponent = filmComponent;

    this._cardComponent = null;
    this._popupComponent = null;
  }

  init(card) {
    this._card = card;

    const prevCardComponent = this._cardComponent;
    const prevPopupComponent = this._popupComponent;

    this._cardComponent = new FilmCard(card);
    this._popupComponent = new PopupSection(card);

    if (prevCardComponent === null || prevPopupComponent ===null){
      render(this._filmComponent, this._cardComponent, RenderPosition.BEFOREEND);
    }
    this._cardComponent.setClickCard(() => {
        render(this._filmComponent, this._popupComponent, RenderPosition.BEFOREEND);
        document.querySelector('body').classList.add('hide-overflow');
        document.addEventListener('keydown', onEscKeyDown);
    });

    this._popupComponent.setClickPopup(() => {
      remove(this._popupComponent);
      document.querySelector('body').classList.remove('hide-overflow');
      document.addEventListener('keydown', onEscKeyDown);
    });

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        remove(this._popupComponent);
        document.removeEventListener('keydown', onEscKeyDown);
        document.querySelector('body').classList.remove('hide-overflow');
      }
    };


  }

  _handleWatchlistClick() {

  }

  _handleWatchedClick() {

  }

  _handleFavoriteClick() {

  }

}
