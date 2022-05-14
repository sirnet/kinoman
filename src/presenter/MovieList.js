import SortElement from "../view/sort.js";
import Films from "../view/films.js";
import FilmList from "../view/film-list.js";
import FilmTop from "../view/film-top.js";
import filmComment from "../view/film-comment.js";
import FilmCard from "../view/film-card.js";
import PopupSection from "../view/popup.js";
import ShowMore from "../view/show-more.js";
import ListEmpty from "../view/list-empty.js";
import { render, remove, replace, RenderPosition } from "../utils/render";

const COUNT = 4;

export default class MovieList {
  constructor (movieContainer) {
      this._movieContainer = movieContainer;

      this._filmComponent = new Films();
      this._sortComponent = new SortElement();
      this._filmListComponent = new FilmList();
      this._noFilmComponent = new ListEmpty();
  }

  init(movieList) {
    this._movieList = movieList.slice();

    render(this._movieContainer, this._filmComponent, RenderPosition.BEFOREEND);
    render(this._filmComponent, this._filmListComponent, RenderPosition.BEFOREEND);
  }

  _renderSort() {
    render(this._filmComponent, this._sortComponent.RenderPosition.AFTERBEGIN);
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

    render(this._filmListComponent, cardComponent, RenderPosition.BEFOREEND);
  }

  _renderMovies(from, to) {
    this._movieList
    .slice(from, to)
    .forEach((movieList) => this._renderMovie(movieList));
  }

  _renderShowMore() {
    let COUNT_CHECK = 4;

    const showMoreComponent = new ShowMore();


  }

  _renderNoFilm() {
    render(this._filmComponent, this._noFilmComponent, RenderPosition.AFTERBEGIN);
  }

  _renderCard() {
    if(this._movieList.every(card)){
      this._renderNoFilm();
      return;
    }

    this._renderSort();

    this._renderMovies(0, Math.min(this._movieList.length, COUNT));

    if(this._movieList.length > COUNT) {
      this._renderShowMore();
    }
  }
}
