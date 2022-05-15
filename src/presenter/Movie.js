import FilmTop from "../view/film-top.js";
import filmComment from "../view/film-comment.js";
import FilmCard from "../view/film-card.js";
import PopupSection from "../view/popup.js";
import { render, remove, replace, RenderPosition } from "../utils/render";

export default class Movie {
  constructor (filmComponent) {
    this._filmComponent = filmComponent;


  }

  _renderMovie(card) {
    const cardComponent = new FilmCard(card);
    const popupComponent = new PopupSection(card);

    const replaceList = () => {
      replace(popupComponent, cardComponent);
    };

    const replaceListCard = () => {
      replace(cardComponent, popupComponent);
    };

    cardComponent.setClickCard(() => {
        render(this._movieContainer, popupComponent, RenderPosition.BEFOREEND);
        document.querySelector('body').classList.add('hide-overflow');
        document.addEventListener('keydown', onEscKeyDown);
    });

    popupComponent.setClickPopup(() => {
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

    render(this._filmComponent, cardComponent, RenderPosition.BEFOREEND);
  }

}
