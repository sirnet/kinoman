import FilmTop from "../view/film-top.js";
import filmComment from "../view/film-comment.js";
import NavigationElement from "../view/navigation.js";
import FilmCard from "../view/film-card.js";
import PopupSection from "../view/popup.js";
import { render, remove, replace, RenderPosition } from "../utils/render";

export default class Movie {
  constructor (filmComponent) {
    this._filmComponent = filmComponent;

    this._cardComponent = null;
    this._popupComponent = null;

    this._handleWatchlistClick = this._handleWatchlistClick.bind(this);
    this._handleWatchedClick = this._handleWatchedClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);

    this._handleClickCard = this._handleClickCard.bind(this);
    this._handleClickPopup = this._handleClickPopup.bind(this);
    this._onEscKeyDown = this._onEscKeyDown.bind(this);

    this._navigationComponent = new NavigationElement();
  }

  init(card) {
    this._card = card;

    const prevCardComponent = this._cardComponent;
    const prevPopupComponent = this._popupComponent;

    this._cardComponent = new FilmCard(card);
    this._popupComponent = new PopupSection(card);

    this._cardComponent.setClickCard(this._handleClickCard);
    this._popupComponent.setClickPopup(this._handleClickPopup);
    this._cardComponent.setClickAddToWatchlist(this._handleWatchlistClick);

    if (prevCardComponent === null || prevPopupComponent === null){
      render(this._filmComponent, this._cardComponent, RenderPosition.BEFOREEND);
      return;
    }

    if(this._filmComponent.getElement().contains(prevCardComponent.getElement())){
      replace(this._cardComponent, prevCardComponent);
    }

    if(this._filmComponent.getElement().contains(prevPopupComponent.getElement())){
      replace(this._popupComponent, prevPopupComponent);
    }

    remove(prevCardComponent);
    remove(prevPopupComponent);

  }

  destroy() {
    remove(this._cardComponent);
    remove(this._popupComponent);
  }

  _onEscKeyDown(evt){
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      remove(this._popupComponent);
      document.removeEventListener('keydown', this._onEscKeyDown);
      document.querySelector('body').classList.remove('hide-overflow');
    }
  }

  _handleClickCard() {
    render(this._filmComponent, this._popupComponent, RenderPosition.BEFOREEND);
    document.querySelector('body').classList.add('hide-overflow');
    document.addEventListener('keydown', this._onEscKeyDown);
  }

  _handleClickPopup() {
    remove(this._popupComponent);
    document.querySelector('body').classList.remove('hide-overflow');
    document.addEventListener('keydown', this._onEscKeyDown);
  }

  _handleWatchlistClick() {
    this._cardComponent.getElement().querySelector(".film-card__controls-item--add-to-watchlist").classList.add('film-card__controls-item--active');
  }

  _handleWatchedClick() {

  }

  _handleFavoriteClick() {

  }

  sortWatchList () {
    this._navigationComponent.getElement().querySelector(".main-navigation__item-count").setAttr;
  }

}
