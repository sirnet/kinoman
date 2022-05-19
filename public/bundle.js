/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mock/cadr.js":
/*!**************************!*\
  !*** ./src/mock/cadr.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardMove": () => (/* binding */ cardMove)
/* harmony export */ });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");


const title = ['The Dance of Life', 'Sagebrush Trail', 'The Man with the Golden Arm',
'Santa Claus Conquers the Martians', 'Popeye the Sailor Meets Sindbad the Sailor'];

const poster = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-great-flamarion.jpg',
  'the-man-with-the-golden-arm.jpg'
];

const description = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.'
];

const comment = {
  autors : ['Misha', 'Viktor', 'Gena', 'Sveta', 'Anastasiya'],
  emotions : ['smile', 'sleeping', 'puke', 'angry'],
  dates : [
    '2019/12/31 23:59',
    '2020/01/23 13:59',
    '2020/02/8 11:20',
    '2020/02/16 63:50',
    '2020/03/13 09:54'
  ],
  message : ['Great movie!', 'Cool', 'Top', 'Nice film']
};

const cardMove = () => {
  return {
      title : title[(0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getRandom)(0, title.length - 1)],
      poster : poster[(0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getRandom)(0, poster.length - 1)],
      description : description[(0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getRandom)(0, description.length - 1)],
      comment : {
        autors : comment.autors[(0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getRandom)(0, comment.autors.length - 1)],
        emotions : comment.emotions[(0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getRandom)(0, comment.emotions.length - 1)],
        dates : comment.dates[(0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getRandom)(0, comment.dates.length - 1)],
        message : comment.message[(0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getRandom)(0, comment.message.length - 1)]
      }
    };
};


/***/ }),

/***/ "./src/presenter/Movie.js":
/*!********************************!*\
  !*** ./src/presenter/Movie.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Movie)
/* harmony export */ });
/* harmony import */ var _view_film_top_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/film-top.js */ "./src/view/film-top.js");
/* harmony import */ var _view_film_comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/film-comment.js */ "./src/view/film-comment.js");
/* harmony import */ var _view_film_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/film-card.js */ "./src/view/film-card.js");
/* harmony import */ var _view_popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/popup.js */ "./src/view/popup.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");






class Movie {
  constructor (filmComponent) {
    this._filmComponent = filmComponent;
  }

  _renderMovie(card) {
    const cardComponent = new _view_film_card_js__WEBPACK_IMPORTED_MODULE_2__["default"](card);
    const popupComponent = new _view_popup_js__WEBPACK_IMPORTED_MODULE_3__["default"](card);

    const replaceList = () => {
      (0,_utils_render__WEBPACK_IMPORTED_MODULE_4__.replace)(popupComponent, cardComponent);
    };

    const replaceListCard = () => {
      (0,_utils_render__WEBPACK_IMPORTED_MODULE_4__.replace)(cardComponent, popupComponent);
    };

    cardComponent.setClickCard(() => {
        (0,_utils_render__WEBPACK_IMPORTED_MODULE_4__.render)(this._filmComponent, popupComponent, _utils_render__WEBPACK_IMPORTED_MODULE_4__.RenderPosition.BEFOREEND);
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

    (0,_utils_render__WEBPACK_IMPORTED_MODULE_4__.render)(this._filmComponent, cardComponent, _utils_render__WEBPACK_IMPORTED_MODULE_4__.RenderPosition.BEFOREEND);
  }

}


/***/ }),

/***/ "./src/presenter/MovieList.js":
/*!************************************!*\
  !*** ./src/presenter/MovieList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MovieList)
/* harmony export */ });
/* harmony import */ var _view_sort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/sort.js */ "./src/view/sort.js");
/* harmony import */ var _view_films_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/films.js */ "./src/view/films.js");
/* harmony import */ var _view_film_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/film-list.js */ "./src/view/film-list.js");
/* harmony import */ var _view_film_top_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/film-top.js */ "./src/view/film-top.js");
/* harmony import */ var _view_film_comment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/film-comment.js */ "./src/view/film-comment.js");
/* harmony import */ var _view_film_card_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/film-card.js */ "./src/view/film-card.js");
/* harmony import */ var _view_popup_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/popup.js */ "./src/view/popup.js");
/* harmony import */ var _view_show_more_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../view/show-more.js */ "./src/view/show-more.js");
/* harmony import */ var _view_list_empty_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../view/list-empty.js */ "./src/view/list-empty.js");
/* harmony import */ var _Movie_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Movie.js */ "./src/presenter/Movie.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");












const COUNT = 4;
const COUNT_CLASS = 1;

class MovieList {
  constructor (movieContainer) {
      this._movieContainer = movieContainer;

      this._filmComponent = new _view_films_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      this._filmTopComponent = new _view_film_top_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
      this._filmCommentComponent = new _view_film_comment_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
      this._sortComponent = new _view_sort_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
      this._filmListComponent = new _view_film_list_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      this._noFilmComponent = new _view_list_empty_js__WEBPACK_IMPORTED_MODULE_8__["default"]();

  }

  init(movieList) {
    this._movieList = movieList.slice();

    (0,_utils_render__WEBPACK_IMPORTED_MODULE_10__.render)(this._movieContainer, this._filmComponent, _utils_render__WEBPACK_IMPORTED_MODULE_10__.RenderPosition.BEFOREEND);
    (0,_utils_render__WEBPACK_IMPORTED_MODULE_10__.render)(this._filmComponent, this._filmListComponent, _utils_render__WEBPACK_IMPORTED_MODULE_10__.RenderPosition.BEFOREEND);
  }

  _renderSort() {
    (0,_utils_render__WEBPACK_IMPORTED_MODULE_10__.render)(this._filmComponent, this._sortComponent.RenderPosition.AFTERBEGIN);
  }

  _renderTopFilm() {
    (0,_utils_render__WEBPACK_IMPORTED_MODULE_10__.render)(this._filmComponent, this._filmTopComponent, _utils_render__WEBPACK_IMPORTED_MODULE_10__.RenderPosition.BEFOREEND);

    const sectionFilmContainer = this._filmTopComponent.getElement().querySelector('.films-list__container');
    const moviePresenter = new _Movie_js__WEBPACK_IMPORTED_MODULE_9__["default"](sectionFilmContainer);

    for(let i =0; i<= COUNT_CLASS; i++) {
      moviePresenter._renderMovie(this._movieList[i]);
    }

  }

  _renderComment() {
    (0,_utils_render__WEBPACK_IMPORTED_MODULE_10__.render)(this._filmComponent, this._filmCommentComponent, _utils_render__WEBPACK_IMPORTED_MODULE_10__.RenderPosition.BEFOREEND);

    const sectionFilmContainer = this._filmCommentComponent.getElement().querySelector('.films-list__container');
    const moviePresenter = new _Movie_js__WEBPACK_IMPORTED_MODULE_9__["default"](sectionFilmContainer);

    for(let i =0; i<= COUNT_CLASS; i++) {
      moviePresenter._renderMovie(this._movieList[i]);
    }
  }

  _renderMovie() {
    const sectionFilmContainer = this._filmComponent.getElement().querySelector('.films-list__container');
    const moviePresenter = new _Movie_js__WEBPACK_IMPORTED_MODULE_9__["default"](sectionFilmContainer);

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

    const showMoreComponent = new _view_show_more_js__WEBPACK_IMPORTED_MODULE_7__["default"]();

  }

  _renderNoFilm() {
    (0,_utils_render__WEBPACK_IMPORTED_MODULE_10__.render)(this._filmComponent, this._noFilmComponent, _utils_render__WEBPACK_IMPORTED_MODULE_10__.RenderPosition.AFTEREND);
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


/***/ }),

/***/ "./src/utils/abstract.js":
/*!*******************************!*\
  !*** ./src/utils/abstract.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Abstract)
/* harmony export */ });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error('Can\'t instantiate Abstarct, only concrete one.');
    }

    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error('Abstract method not implemented: getTemplate');
  }

  getElement() {
    if (!this._element){
      this._element = (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

}


/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandom": () => (/* binding */ getRandom)
/* harmony export */ });
const getRandom = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a,b));
  const upper = Math.floor(Math.max(a,b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPosition": () => (/* binding */ RenderPosition),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "replace": () => (/* binding */ replace),
/* harmony export */   "remove": () => (/* binding */ remove)
/* harmony export */ });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/utils/abstract.js");


const RenderPosition = {
  'BEFOREEND' : 'beforeend',
  'AFTEREND'  : 'afterend'
};

const render = (container, templated, place) => {
  if (container instanceof _abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  if (templated instanceof _abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    templated = templated.getElement();
  }

  switch (place) {
    case RenderPosition.AFTEREND:
      container.prepend(templated);
      break;
    case RenderPosition.BEFOREEND:
      container.append(templated);
      break;
  }
};

const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const replace = (newChild, oldChild) => {
  if (oldChild instanceof _abstract__WEBPACK_IMPORTED_MODULE_0__["default"]){
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error('Can\'t replace unexisting elements');
  }

  parent.replaceChild(newChild, oldChild);
};

const remove = (component) => {
  if (!(component instanceof _abstract__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error('Can remove only components');
  }

  component.getElement().remove();
  component.removeElement();
};


/***/ }),

/***/ "./src/view/film-card.js":
/*!*******************************!*\
  !*** ./src/view/film-card.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilmCard)
/* harmony export */ });
/* harmony import */ var _utils_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abstract */ "./src/utils/abstract.js");


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

class FilmCard extends _utils_abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor (card) {
    super();
    this._card = card;

    this._clickCard = this._clickCard.bind(this);
  }

  getTemplate () {
    return createFilmCard(this._card);
  }

  _clickCard (evt){
    evt.preventDefault();
    this._callback.click();
  }

  setClickCard(callback){
    this._callback.click = callback;
    this.getElement().addEventListener('click', this._clickCard);
  }

}


/***/ }),

/***/ "./src/view/film-comment.js":
/*!**********************************!*\
  !*** ./src/view/film-comment.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilmTop)
/* harmony export */ });
/* harmony import */ var _utils_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abstract.js */ "./src/utils/abstract.js");


const createFilmComment = () => {
  return `<section class="films-list films-list--extra">
    <h2 class="films-list__title">Most commented</h2>
    <div class="films-list__container">
    </div>
  </section>`;
};

class FilmTop extends _utils_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate () {
    return createFilmComment();
  }
}


/***/ }),

/***/ "./src/view/film-list.js":
/*!*******************************!*\
  !*** ./src/view/film-list.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilmList)
/* harmony export */ });
/* harmony import */ var _utils_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abstract.js */ "./src/utils/abstract.js");


const createFilmList = () => {
  return `<section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container">
    </div>
  </section>`;
};

class FilmList extends _utils_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate () {
    return createFilmList();
  }
}


/***/ }),

/***/ "./src/view/film-top.js":
/*!******************************!*\
  !*** ./src/view/film-top.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilmTop)
/* harmony export */ });
/* harmony import */ var _utils_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abstract.js */ "./src/utils/abstract.js");


const createFilmTop = () => {
  return `<section class="films-list films-list--extra">
    <h2 class="films-list__title">Top rated</h2>
    <div class="films-list__container">
    </div>
  </section>`;
};

class FilmTop extends _utils_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate () {
    return createFilmTop();
  }
}


/***/ }),

/***/ "./src/view/films.js":
/*!***************************!*\
  !*** ./src/view/films.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Films)
/* harmony export */ });
/* harmony import */ var _utils_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abstract */ "./src/utils/abstract.js");


const createFilmsTemplate = () => {
  return `<section class="films">
  </section>`;
};

class Films extends _utils_abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate () {
    return createFilmsTemplate();
  }
}


/***/ }),

/***/ "./src/view/list-empty.js":
/*!********************************!*\
  !*** ./src/view/list-empty.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListEmpty)
/* harmony export */ });
/* harmony import */ var _utils_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abstract */ "./src/utils/abstract.js");


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

class ListEmpty extends _utils_abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate () {
    return createListEmpty();
  }
}


/***/ }),

/***/ "./src/view/navigation.js":
/*!********************************!*\
  !*** ./src/view/navigation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var _utils_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abstract */ "./src/utils/abstract.js");


const createNavigationTemplate = () => {
  return `<nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
</nav>`;
};

class Navigation extends _utils_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]{
  getTemplate () {
    return createNavigationTemplate();
  }
}


/***/ }),

/***/ "./src/view/popup.js":
/*!***************************!*\
  !*** ./src/view/popup.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupSection)
/* harmony export */ });
/* harmony import */ var _utils_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abstract */ "./src/utils/abstract.js");


const createPopupSection = (array) => {
  const {title, poster, description, } = array;
  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="./images/posters/${poster}" alt="">

          <p class="film-details__age">18+</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${title}</h3>
              <p class="film-details__title-original">${description}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">8.9</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">Anthony Mann</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">Anne Wigton, Heinz Herald, Richard Weil</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">Erich von Stroheim, Mary Beth Hughes, Dan Duryea</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">30 March 1945</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">1h 18m</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">USA</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Genres</td>
              <td class="film-details__cell">
                <span class="film-details__genre">Drama</span>
                <span class="film-details__genre">Film-Noir</span>
                <span class="film-details__genre">Mystery</span></td>
            </tr>
          </table>

          <p class="film-details__film-description">
            The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Great Flamarion (Erich von Stroheim) is an arrogant, friendless, and misogynous marksman who displays his trick gunshot act in the vaudeville circuit. His show features a beautiful assistant, Connie (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), Flamarion's other assistant. Flamarion falls in love with Connie, the movie's femme fatale, and is soon manipulated by her into killing her no good husband during one of their acts.
          </p>
        </div>
      </div>

      <section class="film-details__controls">
        <button type="button" class="film-details__control-button film-details__control-button--watchlist" id="watchlist" name="watchlist">Add to watchlist</button>
        <button type="button" class="film-details__control-button film-details__control-button--active film-details__control-button--watched" id="watched" name="watched">Already watched</button>
        <button type="button" class="film-details__control-button film-details__control-button--favorite" id="favorite" name="favorite">Add to favorites</button>
      </section>
    </div>

    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">4</span></h3>

        <ul class="film-details__comments-list">
          <li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/smile.png" width="55" height="55" alt="emoji-smile">
            </span>
            <div>
              <p class="film-details__comment-text">Interesting setting and a good cast</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">Tim Macoveev</span>
                <span class="film-details__comment-day">2019/12/31 23:59</span>
                <button class="film-details__comment-delete">Delete</button>
              </p>
            </div>
          </li>
          <li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/sleeping.png" width="55" height="55" alt="emoji-sleeping">
            </span>
            <div>
              <p class="film-details__comment-text">Booooooooooring</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">John Doe</span>
                <span class="film-details__comment-day">2 days ago</span>
                <button class="film-details__comment-delete">Delete</button>
              </p>
            </div>
          </li>
          <li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/puke.png" width="55" height="55" alt="emoji-puke">
            </span>
            <div>
              <p class="film-details__comment-text">Very very old. Meh</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">John Doe</span>
                <span class="film-details__comment-day">2 days ago</span>
                <button class="film-details__comment-delete">Delete</button>
              </p>
            </div>
          </li>
          <li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/angry.png" width="55" height="55" alt="emoji-angry">
            </span>
            <div>
              <p class="film-details__comment-text">Almost two hours? Seriously?</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">John Doe</span>
                <span class="film-details__comment-day">Today</span>
                <button class="film-details__comment-delete">Delete</button>
              </p>
            </div>
          </li>
        </ul>

        <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label"></div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>

          <div class="film-details__emoji-list">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
            <label class="film-details__emoji-label" for="emoji-smile">
              <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
            <label class="film-details__emoji-label" for="emoji-sleeping">
              <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
            <label class="film-details__emoji-label" for="emoji-puke">
              <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
            <label class="film-details__emoji-label" for="emoji-angry">
              <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
            </label>
          </div>
        </div>
      </section>
    </div>
  </form>
</section>`;
};

class PopupSection extends _utils_abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor (card) {
    super();
    this._card = card;

    this._clickPopup = this._clickPopup.bind(this);
  }

  getTemplate () {
    return createPopupSection(this._card);
  }

  _clickPopup (evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setClickPopup (callback) {
    this._callback.click = callback;
    this.getElement().addEventListener('click', this._clickPopup);
  }
}


/***/ }),

/***/ "./src/view/profile.js":
/*!*****************************!*\
  !*** ./src/view/profile.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Profile)
/* harmony export */ });
/* harmony import */ var _utils_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abstract */ "./src/utils/abstract.js");


const createProfileTemplate = () => {
  return `<section class="header__profile profile">
  <p class="profile__rating">Movie Buff</p>
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;
};

class Profile extends _utils_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]{
  getTemplate () {
    return createProfileTemplate();
  }
}


/***/ }),

/***/ "./src/view/show-more.js":
/*!*******************************!*\
  !*** ./src/view/show-more.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowMore)
/* harmony export */ });
/* harmony import */ var _utils_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abstract.js */ "./src/utils/abstract.js");


const createShowMore = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

class ShowMore extends _utils_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor () {
    super();

    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate () {
    return createShowMore();
  }

  _clickHandler (evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setClickHandler (callback) {
    this._callback.click = callback;
    this.getElement().addEventListener('click', this._clickHandler);
  }
}


/***/ }),

/***/ "./src/view/sort.js":
/*!**************************!*\
  !*** ./src/view/sort.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sort)
/* harmony export */ });
/* harmony import */ var _utils_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abstract */ "./src/utils/abstract.js");


const createSortTemplate = () => {
  return `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`;
};

class Sort extends _utils_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]{
  getTemplate () {
    return createSortTemplate();
  }
}


/***/ }),

/***/ "./src/view/stats.js":
/*!***************************!*\
  !*** ./src/view/stats.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StatsSection)
/* harmony export */ });
/* harmony import */ var _utils_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abstract */ "./src/utils/abstract.js");


const createStatsSection = () => {
  return `<section class="statistic">
  <p class="statistic__rank">
    Your rank
    <img class="statistic__img" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    <span class="statistic__rank-label">Movie buff</span>
  </p>

  <form action="https://echo.htmlacademy.ru/" method="get" class="statistic__filters">
    <p class="statistic__filters-description">Show stats:</p>

    <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-all-time" value="all-time" checked>
    <label for="statistic-all-time" class="statistic__filters-label">All time</label>

    <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-today" value="today">
    <label for="statistic-today" class="statistic__filters-label">Today</label>

    <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-week" value="week">
    <label for="statistic-week" class="statistic__filters-label">Week</label>

    <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-month" value="month">
    <label for="statistic-month" class="statistic__filters-label">Month</label>

    <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-year" value="year">
    <label for="statistic-year" class="statistic__filters-label">Year</label>
  </form>

  <ul class="statistic__text-list">
    <li class="statistic__text-item">
      <h4 class="statistic__item-title">You watched</h4>
      <p class="statistic__item-text">28 <span class="statistic__item-description">movies</span></p>
    </li>
    <li class="statistic__text-item">
      <h4 class="statistic__item-title">Total duration</h4>
      <p class="statistic__item-text">69 <span class="statistic__item-description">h</span> 41 <span class="statistic__item-description">m</span></p>
    </li>
    <li class="statistic__text-item">
      <h4 class="statistic__item-title">Top genre</h4>
      <p class="statistic__item-text">Drama</p>
    </li>
  </ul>


  <img src="images/cinemaddict-stats-markup.png" alt="Пример диаграммы">

  <div class="statistic__chart-wrap">
    <canvas class="statistic__chart" width="1000"></canvas>
  </div>

</section>`;
};

class StatsSection extends _utils_abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
    getTemplate () {
    return createStatsSection();
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_profile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/profile.js */ "./src/view/profile.js");
/* harmony import */ var _view_navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/navigation.js */ "./src/view/navigation.js");
/* harmony import */ var _presenter_MovieList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presenter/MovieList.js */ "./src/presenter/MovieList.js");
/* harmony import */ var _presenter_Movie_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presenter/Movie.js */ "./src/presenter/Movie.js");
/* harmony import */ var _view_film_top_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/film-top.js */ "./src/view/film-top.js");
/* harmony import */ var _view_film_comment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/film-comment.js */ "./src/view/film-comment.js");
/* harmony import */ var _view_film_card_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/film-card.js */ "./src/view/film-card.js");
/* harmony import */ var _view_stats_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/stats.js */ "./src/view/stats.js");
/* harmony import */ var _view_popup_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/popup.js */ "./src/view/popup.js");
/* harmony import */ var _mock_cadr_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mock/cadr.js */ "./src/mock/cadr.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/render */ "./src/utils/render.js");




//import SortElement from "./view/sort.js";
//import Films from "./view/films.js";
//import FilmList from "./view/film-list.js";



//import ShowMore from "./view/show-more.js";


//import ListEmpty from "./view/list-empty.js";




const COUNT = 4;
let COUNT_CHECK = 4;
const COUNT_CLASS = 1;
const COUNT_FILMS = 21;
let card = new Array(COUNT_FILMS).fill().map(_mock_cadr_js__WEBPACK_IMPORTED_MODULE_9__.cardMove);

// const renderCard = (cardListElement, card) => {
//   const cardComponent = new FilmCard(card);
//   const popupComponent = new PopupSection(card);

//   const replaceList = () => {
//     replace(popupComponent, cardComponent);
//   };

//   const replaceListCard = () => {
//     replace(cardComponent, popupComponent);
//   };

//   cardComponent.setClickCard(() => {
//       render(sectionMainElement, popupComponent, RenderPosition.BEFOREEND);
//       document.querySelector('body').classList.add('hide-overflow');
//       document.addEventListener('keydown', onEscKeyDown);
//   });

//   popupComponent.setClickPopup(() => {
//     popupComponent.getElement().remove();
//     popupComponent.removeElement();
//     document.querySelector('body').classList.remove('hide-overflow');
//     document.addEventListener('keydown', onEscKeyDown);
//   });

//   const onEscKeyDown = (evt) => {
//     if (evt.key === 'Escape' || evt.key === 'Esc') {
//       evt.preventDefault();
//       popupComponent.getElement().remove();
//       popupComponent.removeElement();
//       document.removeEventListener('keydown', onEscKeyDown);
//       document.querySelector('body').classList.remove('hide-overflow');
//     }
//   };

//   render(cardListElement, cardComponent, RenderPosition.BEFOREEND);
// };

//const renderFilmList = (element, count) => {
   //for(let i = 0; i <= count; i++){
     //renderCard(sectionFilmContainer[element], card[i]);
   //
 //};

//Звание пользователя
const haiderElement = document.querySelector('.header');
(0,_utils_render__WEBPACK_IMPORTED_MODULE_10__.render)(haiderElement, new _view_profile_js__WEBPACK_IMPORTED_MODULE_0__["default"](), _utils_render__WEBPACK_IMPORTED_MODULE_10__.RenderPosition.BEFOREEND);

//Навигация и сортировка
const sectionMainElement = document.querySelector('.main');
(0,_utils_render__WEBPACK_IMPORTED_MODULE_10__.render)(sectionMainElement, new _view_navigation_js__WEBPACK_IMPORTED_MODULE_1__["default"](), _utils_render__WEBPACK_IMPORTED_MODULE_10__.RenderPosition.BEFOREEND);
//render(sectionMainElement, new SortElement(), RenderPosition.BEFOREEND);

const moviePresenter = new _presenter_MovieList_js__WEBPACK_IMPORTED_MODULE_2__["default"](sectionMainElement);

//const sectionFilmList = filmsComponent.getElement().querySelectorAll('.films-list');
//const sectionFilmContainer = filmsComponent.getElement().querySelectorAll('.films-list__container');


// //Секция films
//const filmsComponent = new Films();
//render(sectionMainElement, filmsComponent.getElement(), RenderPosition.BEFOREEND);

//const filmListComponent = new FilmList();
//render(filmsComponent, filmListComponent, RenderPosition.BEFOREEND);
// const filmTopComponent = new FilmTop();
// render(filmsComponent, filmTopComponent, RenderPosition.BEFOREEND);
// const filmCommentComponent = new filmComment();
// render(filmsComponent, filmCommentComponent, RenderPosition.BEFOREEND);


//const sectionFilmList = filmsComponent.getElement().querySelectorAll('.films-list');
//const sectionFilmContainer = filmsComponent.getElement().querySelectorAll('.films-list__container');

//renderFilmList(0, COUNT);
//renderFilmList(1, COUNT_CLASS);
//renderFilmList(2, COUNT_CLASS);


// const showMoreComponent = new ShowMore();
// render(sectionFilmList[0], showMoreComponent.getElement(), 'beforeend');
// showMoreComponent.setClickHandler(() => {
//     for(let i = 0; i <= COUNT; i++){
//       if (COUNT_CHECK <= (card.length - 1)){
//         renderCard(sectionFilmContainer[0], card[COUNT_CHECK]);
//         COUNT_CHECK++;
//       }
//       else {
//         showMoreComponent.getElement().remove();
//         showMoreComponent.removeElement();
//        }
//      }
// });

//render(sectionMainElement, new ListEmpty(), RenderPosition.BEFOREEND);
//render(sectionMainElement, new StatsSection(), RenderPosition.BEFOREEND);
//filmsComponent.getElement().remove();
//filmsComponent.removeElement();

moviePresenter.init(card);
moviePresenter._renderMovie();
moviePresenter._renderTopFilm();
moviePresenter._renderComment();
//moviePresenter._renderMovie(card);

//const sectionFilmList = filmsComponent.getElement().querySelectorAll('.films-list');
//const sectionFilmContainer = filmsComponent.getElement().querySelectorAll('.films-list__container');

//renderFilmList(0, COUNT);
//renderFilmList(1, COUNT_CLASS);
//renderFilmList(2, COUNT_CLASS);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map