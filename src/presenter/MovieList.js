import SortElement from "../view/sort.js";
import Films from "../view/films.js";
import FilmList from "../view/film-list.js";
import FilmTop from "../view/film-top.js";
import filmComment from "../view/film-comment.js";
import FilmCard from "../view/film-card.js";
import PopupSection from "../view/popup.js";
import ShowMore from "../view/show-more.js";
import ListEmpty from "../view/list-empty.js";
import Movie from "./Movie.js";
import { render, remove, replace, RenderPosition } from "../utils/render";

const COUNT = 4;
const COUNT_CLASS = 1;

export default class MovieList {
  constructor (movieContainer) {
      this._movieContainer = movieContainer;

      this._filmComponent = new Films();
      this._filmTopComponent = new FilmTop();
      this._filmCommentComponent = new filmComment();
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

  _renderTopFilm() {
    render(this._filmComponent, this._filmTopComponent, RenderPosition.BEFOREEND);

    const sectionFilmContainer = this._filmTopComponent.getElement().querySelector('.films-list__container');
    const moviePresenter = new Movie(sectionFilmContainer);

    for(let i =0; i<= COUNT_CLASS; i++) {
      moviePresenter._renderMovie(this._movieList[i]);
    }

  }

  _renderComment() {
    render(this._filmComponent, this._filmCommentComponent, RenderPosition.BEFOREEND);

    const sectionFilmContainer = this._filmCommentComponent.getElement().querySelector('.films-list__container');
    const moviePresenter = new Movie(sectionFilmContainer);

    for(let i =0; i<= COUNT_CLASS; i++) {
      moviePresenter._renderMovie(this._movieList[i]);
    }
  }

  _renderMovie() {
    const sectionFilmContainer = this._filmComponent.getElement().querySelector('.films-list__container');
    const moviePresenter = new Movie(sectionFilmContainer);

    for(let i =0; i<= COUNT; i++) {
      moviePresenter._renderMovie(this._movieList[i]);
    }
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
