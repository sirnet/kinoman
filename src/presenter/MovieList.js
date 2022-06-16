import SortElement from "../view/sort.js";
import Films from "../view/films.js";
import FilmList from "../view/film-list.js";
import FilmTop from "../view/film-top.js";
import filmComment from "../view/film-comment.js";
import ShowMore from "../view/show-more.js";
import ListEmpty from "../view/list-empty.js";
import Movie from "./Movie.js";
import { render, remove, replace, RenderPosition } from "../utils/render";

const COUNT_PER_STEP = 5;
export default class MovieList {
  constructor (movieContainer) {
      this._movieContainer = movieContainer;
      this._renderCardCount = COUNT_PER_STEP;

      this._filmComponent = new Films();
      this._filmTopComponent = new FilmTop();
      this._filmCommentComponent = new filmComment();
      this._sortComponent = new SortElement();
      this._filmListComponent = new FilmList();
      this._noFilmComponent = new ListEmpty();
      this._showMoreComponent = new ShowMore();

      this._handleLoadMoreButtonClick = this._handleLoadMoreButtonClick.bind(this);
  }

  init(movieList) {
    this._movieList = movieList.slice();

    render(this._movieContainer, this._filmComponent, RenderPosition.BEFOREEND);
    render(this._filmComponent, this._filmListComponent, RenderPosition.BEFOREEND);
    this._listMovieComponent = this._filmComponent.getElement().querySelector('.films-list__container');

    this._renderCard();
  }

  _renderSort() {
    render(this._filmComponent, this._sortComponent, RenderPosition.AFTEREND);
  }

  _renderTopFilm() {
    render(this._filmComponent, this._filmTopComponent, RenderPosition.BEFOREEND);
    this._topFilmsComponent = this._filmTopComponent.getElement().querySelector('.films-list__container');

    this._movieList
    .slice(0, 2)
    .forEach((movieList) => this._renderMovie(movieList, this._topFilmsComponent));

  }

  _renderComment() {
    render(this._filmComponent, this._filmCommentComponent, RenderPosition.BEFOREEND);
    this._commentComponent = this._filmCommentComponent.getElement().querySelector('.films-list__container');

    this._movieList
    .slice(0, 2)
    .forEach((movieList) => this._renderMovie(movieList, this._commentComponent));
  }

  _renderListMovie(from, to) {
    this._movieList
    .slice(from, to)
    .forEach((movieList) => this._renderMovie(movieList, this._listMovieComponent));
  }

  _renderMovie(card, section) {
    this.movieComponent = new Movie(section);
    this.movieComponent.init(card);
  }

  _handleLoadMoreButtonClick() {
    this._renderListMovie(this._renderCardCount, this._renderCardCount + COUNT_PER_STEP);
    this._renderCardCount += COUNT_PER_STEP;

    if (this._renderCardCount >= this._movieList.length) {
      remove(this._showMoreComponent);
    }
  }

  _renderShowMore() {

    render(this._filmListComponent, this._showMoreComponent, RenderPosition.BEFOREEND);
    this._showMoreComponent.setClickHandler(this._handleLoadMoreButtonClick);
  }

  _renderNoFilm() {
    render(this._filmComponent, this._noFilmComponent, RenderPosition.AFTEREND);
  }

  _renderCard() {
    // if(this._movieList.every(card)){
    //   this._renderNoFilm();
    //   return;
    // }

    this._renderListMovie(0,5);
    this._renderSort();
    this._renderShowMore();


  }
}
